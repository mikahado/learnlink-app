import os
from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
from flask_migrate import Migrate

import openai

from models import db, Teacher,Student,Subject

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)
migrate = Migrate(app, db)

db.init_app(app)

@app.route('/teacher', methods=['GET'])
def teacher():
    if request.method == 'GET':
        teachers = Teacher.query.all()

        return make_response(
            jsonify([teacher.to_dict() for teacher in teachers]),
            200,
        )
    
    return make_response(
        jsonify({"text": "Method Not Allowed"}),
        405,
    ) 

@app.route("/moral", methods=("POST",))
def moral():
    if request.method == "POST":
        # need to receive student id and story from the form
        input_text = request.form["story"]
        student_id = request.form["student_id"]

        student = Student.query.get(student_id)
        bio = student.bio
        prompt = generate_prompt(input_text, bio)
        # query the database for the student's bio


        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=prompt,
            temperature=0.9,
            max_tokens=500
        )

        return jsonify({"result": response.choices[0].text})

    # result = request.args.get("result")
    # return render_template("index.html", result=result)

def generate_prompt(input_text, bio):
    return f"""Story: {input_text} Student bio: {bio}
    
    
Prompt: Summarize the moral of the story above in 280 characters or less for this elementary school student with accessibility needs. Use playful, meaningful emojis to assist in reading comprehension. 6 year old reading level.

Consider the bio of the student and tailor the summary to their needs.

""".format(
        input_text.capitalize()
    )

if __name__ == '__main__':
    app.run(port=5555)