from dataclasses import dataclass
from re import sub
from typing import List

import django
import requests
from bs4 import BeautifulSoup

legal_titles = ["Bc.", "BcA.", "Ing.", "Ing. arch.", "MUDr.", "MVDr.", "MDDr.", "MgA.", "Mgr.", "JUDr.", "PhDr.",
                "RNDr.", "PharmDr.", "ThLic.", "ThDr.", "Ph.D.", "MBA", "Th.D.", "prof.", "doc.", "CSc.", "DSc.",
                "DrSc.", "PaedDr.", "PhMr.", "DiS."]


@dataclass
class TempEmployee:
    name: str
    phone_extension: str
    email: str


def _get(url: str):
    try:
        res = requests.get(url)
        res.raise_for_status()
        return res
    except Exception as e:
        print(str(e))
        return None


def add_employees_from_file():
    with open("./employees.txt") as f:
        employees = [[line.strip() for line in lines.split("\n")] for lines in f.read().split("\n\n")]
        for employee in employees:
            titles = []
            names = []
            print(employee)
            full_name, _, phone, email = employee
            before = True

            if phone == "-":
                phone = None

            for idx, val in enumerate(full_name.split(" ")):
                val = val.replace(",", "")
                if val in legal_titles:
                    if before:
                        titles.append(("before", val))
                    else:
                        titles.append(("after", val))
                else:
                    before = False
                    names.append(val)

            names = [n.replace(",", "") for n in names]
            first_name, last_name = names

            gender = "F" if last_name.endswith("á") else "M"
            if Employee.objects.filter(first_name=first_name, last_name=last_name).exists():
                e_obj: Employee = Employee.objects.filter(first_name=first_name, last_name=last_name).first()
                e_obj.email = email
                e_obj.gender = gender
                e_obj.phone_number = phone
                e_obj.save()
                print(f"Modified: {full_name}")
            else:
                e_obj = Employee.objects.create(first_name=first_name, last_name=last_name, email=email,
                                                gender=gender, phone_number=phone)
                print(f"Created: {full_name}")

            for idx, (location, title_name) in enumerate(titles):
                if Title.objects.filter(name__iexact=title_name).exists():
                    title_obj = Title.objects.filter(name__iexact=title_name).first()
                else:
                    title_obj = Title.objects.create(name=title_name)
                    title_obj.save()

                if EmployeeTitle.objects.filter(employee_id=e_obj, title_id=title_obj, location=location,
                                                position=idx).exists():
                    continue
                else:
                    employee_title = EmployeeTitle.objects.create(title_id=title_obj, employee_id=e_obj,
                                                                  location=location,
                                                                  position=idx)
                employee_title.save()


def scrape(url: str):
    res = _get(url)
    if res is None:
        return []

    soup = BeautifulSoup(res.content, "html.parser")

    table = soup.select("#table4")

    data = []
    for x in table[0].find_all("tr"):
        temp = []
        for cell in x.find_all("td"):
            if cell["bgcolor"] == "#000066":
                continue
            temp.append(cell.text)

        if temp:
            vals = [sub(" +", " ", val.strip().replace("\t", "").replace("\n", "").replace("\r", "")) for val in
                    temp]
            data.append(TempEmployee(*vals))

    return data


def insert_into_db(data: List[TempEmployee]):
    modified = 0
    created = 0
    for employee in data:
        names: List[str] = []
        titles = []
        before = True
        for idx, val in enumerate(employee.name.split(" ")):
            if val in legal_titles:
                if before:
                    titles.append(("before", val))
                else:
                    titles.append(("after", val))
            else:
                before = False
                names.append(val)

        names = [n.replace(",", "") for n in names]
        suffix = None
        if len(names) == 2:
            first_name, last_name = names
        else:
            first_name, last_name, suffix = names

        titles_before = "".join([t[1] for t in titles if t[0] == "before"])
        titles_after = ",".join([t[1] for t in titles if t[0] == "after"])
        print(f"{titles_before=} {first_name=} {last_name=} {suffix=} {titles_after=}")

        gender = "F" if last_name.endswith("á") else "M"
        if Employee.objects.filter(first_name=first_name, last_name=last_name).exists():
            e_obj: Employee = Employee.objects.filter(first_name=first_name, last_name=last_name).first()
            e_obj.email = employee.email
            e_obj.gender = gender
            e_obj.save()
            print(f"Modified: {employee.name}")
            modified += 1
        else:
            e_obj = Employee.objects.create(first_name=first_name, last_name=last_name, email=employee.email,
                                            gender=gender, suffix=suffix)
            print(f"Created: {employee.name}")
            created += 1

        for idx, (location, title_name) in enumerate(titles):
            if Title.objects.filter(name__iexact=title_name).exists():
                title_obj = Title.objects.filter(name__iexact=title_name).first()
            else:
                title_obj = Title.objects.create(name=title_name)
                title_obj.save()

            if EmployeeTitle.objects.filter(employee_id=e_obj, title_id=title_obj, location=location,
                                            position=idx).exists():
                continue
            else:
                employee_title = EmployeeTitle.objects.create(title_id=title_obj, employee_id=e_obj, location=location,
                                                              position=idx)
            employee_title.save()

    print(f"Created: {created} employees \nModified: {modified} employees \nTotal: {created + modified}")


if __name__ == "__main__":
    import os

    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
    django.setup()

    from api.models import Employee, Title, EmployeeTitle

    # URL = "http://www.sspbrno.cz/view.php?cisloclanku=2005090605"
    # print("Starting to scrape employees")
    # print(f"URL: {URL}")
    # data = scrape(URL)
    # print(f"Found {len(data)} employees")
    # print("Inserting into db")
    # insert_into_db(data)
    add_employees_from_file()
