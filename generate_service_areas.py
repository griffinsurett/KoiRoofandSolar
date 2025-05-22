# generate_service_areas.py

import requests
from bs4 import BeautifulSoup
import json

# mapping of counties → region
COUNTY_REGION = {
    # North Jersey
    **dict.fromkeys([
        "Bergen","Essex","Hudson","Passaic","Sussex","Union","Warren","Morris"
    ], "North Jersey"),
    # Central Jersey
    **dict.fromkeys([
        "Hunterdon","Somerset","Mercer","Middlesex"
    ], "Central Jersey"),
    # South Jersey
    **dict.fromkeys([
        "Atlantic","Burlington","Camden","Cape May",
        "Cumberland","Gloucester","Monmouth","Ocean"
    ], "South Jersey"),
}

def fetch_wiki_table():
    url = "https://en.wikipedia.org/wiki/List_of_municipalities_in_New_Jersey"
    r = requests.get(url)
    r.raise_for_status()
    soup = BeautifulSoup(r.text, "html.parser")
    # The page has one big wikitable sortable
    table = soup.find("table", {"class": "wikitable"})
    return table

def parse_table(table):
    data = []
    for row in table.find_all("tr")[1:]:
        cols = [c.text.strip() for c in row.find_all(["th","td"])]
        if len(cols) < 6:
            continue
        name = cols[1]
        muni_type = cols[2]
        county = cols[3]
        population = cols[4]  # unused
        # get region from county
        region = COUNTY_REGION.get(county, "Unknown")
        # id = slugify(name)
        slug = name.lower().replace(" ", "-").replace(".", "").replace("’","").replace("–","-")
        data.append({
            "title": name,
            "id": slug,
            "tags": [ county, region ]
        })
    return data

def main():
    table = fetch_wiki_table()
    all_munis = parse_table(table)
    with open("serviceAreas.json", "w", encoding="utf-8") as f:
        json.dump(all_munis, f, ensure_ascii=False, indent=2)
    print(f"Wrote {len(all_munis)} entries to serviceAreas.json")

if __name__ == "__main__":
    main()
