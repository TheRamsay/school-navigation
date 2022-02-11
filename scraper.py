import requests
from bs4 import BeautifulSoup

URL = "http://www.sspbrno.cz/view.php?cisloclanku=2005090605"

res = requests.get(URL)

soup = BeautifulSoup(res.content, "html.parser")

table = soup.select("#table4")

for x in table[0].find_all("tr"):
    temp = []
    for cell in x.find_all("td"):
        if cell["bgcolor"] == "#000066":
            continue
        temp.append(cell.text)

    print(temp)
