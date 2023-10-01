import os
from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
from flask_migrate import Migrate

from models import db, Teacher,Student,Subject

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)
migrate = Migrate(app, db)

db.init_app(app)

# Basic Route for setup 
# @app.route('/')
# @app.route('/<int:id>')
# def index(id=0):
#     return render_template("index.html")

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

if __name__ == '__main__':
    app.run(port=5555)