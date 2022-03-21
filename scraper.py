from dataclasses import dataclass
from re import sub
from typing import List

import django
import requests
from bs4 import BeautifulSoup


@dataclass
class TempEmployee:
    name: str
    phone_number: str
    email: str


def _get(url: str):
    try:
        res = requests.get(url)
        res.raise_for_status()
        return res
    except Exception as e:
        print(str(e))
        return None


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
    titles = ["Bc.", "BcA.", "Ing.", "Ing. arch.", "MUDr.", "MVDr.", "MDDr.", "MgA.", "Mgr.", "JUDr.", "PhDr.", "RNDr.",
              "PharmDr.", "ThLic.", "ThDr.", "Ph.D.", "Th.D.", "prof.", "doc.", "CSc.", "DSc.", "DrSc.", "PaedDr.",
              "PhMr.",
              "DiS."]

    modified = 0
    created = 0
    new_id = Employee.objects.all().last().employee_id + 1
    for employee in data:
        names: List[str] = []
        title_before = None
        title_after = None
        for idx, val in enumerate(employee.name.split(" ")):
            if val in titles:
                if idx == 0:
                    title_before = val
                elif idx == 3:
                    title_after = val
            else:
                names.append(val.replace(",", ""))

        if len(names) > 2:
            names = [names[0], " ".join(names[1:])]

        first_name, last_name = names
        gender = "F" if last_name.endswith("á") else "M"
        e = Employee.objects.filter(first_name=first_name, last_name=last_name)
        if e:
            obj: Employee = e[0]
            obj.email = employee.email
            obj.gender = gender
            obj.save()
            print(f"Modified: {employee.name}")
            modified += 1
        else:
            obj = Employee(employee_id=new_id, first_name=first_name, last_name=last_name, title_after=title_after,
                           title_before=title_before, email=employee.email, gender=gender)
            obj.save()
            print(f"Created: {employee.name}")
            created += 1
        new_id += 1

    print(f"Created: {created} employees \nModified: {modified} employees \nTotal: {created + modified}")


if __name__ == "__main__":
    import os

    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
    django.setup()

    from api.models import Employee

    URL = "http://www.sspbrno.cz/view.php?cisloclanku=2005090605"
    print("Starting to scrape employees")
    print(f"URL: {URL}")
    data = scrape(URL)
    print(f"Found {len(data)} employees")
    print("Inserting into db")
    insert_into_db(data)
