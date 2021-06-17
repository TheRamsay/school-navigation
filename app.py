from flask import Flask, jsonify, make_response
import json
from flask_cors import CORS
from werkzeug.utils import redirect, secure_filename


with open("data.json") as f:
    data = json.load(f)
app = Flask(__name__)
CORS(app)
cors = CORS(app, resource={
    r"/*": {
        "origins": "*"
    }
})


@app.route("/api/cabinet/<cabinet_id>")
def get_cabinet(cabinet_id):
    teachers = []
    teacher_ids = []
    phone = ""

    for cabinet in data["cabinets"]:
        if cabinet["id"] == cabinet_id:
            teacher_ids = cabinet["teachers"]
            phone = cabinet["phone"]
            break

    for teacher in data["teachers"]:
        if teacher["id"] in teacher_ids:
            teachers.append(f"{teacher['firstname']} {teacher['surname']}")
    print(teachers)
    return {
                      "cabinet_id": cabinet_id,
            "teachers": teachers,
            "phone": phone
            }


@app.route("/api/teacher/<firstname>/<surname>")
def get_teacher(firstname: str, surname: str):
    teacher_id = None
    for teacher in data["teachers"]:
        if teacher["firstname"] == firstname and teacher["surname"] == surname:
            teacher_id = teacher['id']

    if not teacher_id:
        return make_response({"error": "Teacher doesn't exists"}, 404)

    for cabinet in data["cabinets"]:
        if teacher_id in cabinet["teachers"]:
            return redirect("http://127.0.0.1:5000/api/cabinet/" + cabinet["id"] )

@app.route("/api/teacher/all")
def get_all_teachers():
    teachers = []
    for teacher in data['teachers']:
        full_name = f"{teacher['firstname'].lower()} {teacher['surname'].lower()}"
        teachers.append(full_name)

    return jsonify(teachers)
