import requests
from bs4 import BeautifulSoup
from dataclasses import dataclass
from re import sub

@dataclass 
class Employee:
    name: str
    phone_number: str
    email: str

class Scraper:

    def __init__(self, url: str) -> None:
        self.url = url

    def _get(self, url: str):
        try:
            res = requests.get(url)
            res.raise_for_status()
            return res
        except Exception as e:
            print(str(e))
            return None

    def scrape(self):
        res = self._get(self.url)
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
                vals = [sub(" +", " ", val.strip().replace("\t", "").replace("\n", "").replace("\r", "")) for val in temp]
                data.append(Employee(*vals))

        return data



if __name__ == "__main__":
    scraper = Scraper("http://www.sspbrno.cz/view.php?cisloclanku=2005090605")
    for employee in scraper.scrape():
        print(f"{employee.name}\t{employee.phone_number}\t{employee.email}")
