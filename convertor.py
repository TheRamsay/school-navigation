import json
import psycopg2

conn = psycopg2.connect(
        dbname="navigation",
        user="***REMOVED***", 
        password="", 
        host="localhost"
)


with open("./data.json") as f:
    data = json.load(f)

teachers = data['teachers']

for teacher_info in teachers:
    print(teacher)
