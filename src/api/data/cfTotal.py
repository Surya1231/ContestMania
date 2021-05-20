import requests
from bs4 import BeautifulSoup

start = int(input("Please enter the id of last contest present in total.js\n"))+1

url = "https://codeforces.com/api/contest.list"
x = requests.get(url)
x = x.json()

for i in x['result']:
    if i['phase'] == "FINISHED":
        l = i["id"]
        break

print("\nLast id to be updated ",l)
print("Total estimated time : ",(l-start+1)*3," seconds\n")

f = open("cfTotalData.js","a")
for id in range(start,l+1):
    print(id," is updating")
    page = requests.get("https://codeforces.com/contest/"+str(id))
    soup = BeautifulSoup(page.content, 'html.parser')
    w = False
    a = []
    for i in soup.find_all('option'):
        t = i.get_text()
        if t == "Choose problem":
            if w:
                break;
            else:
                w = True
        else:
            a.append(t.split(' ')[0])
    temp = str(id)+':'+str(a)+",\n"
    f.write(temp)

f.write("}")
f.close()
