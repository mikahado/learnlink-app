import os
from flask import Flask, request, make_response, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
from flask_migrate import Migrate
from flask_restful import Api, Resource


from config import app, db, api

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

from models import db, Teacher,Student,Subject
db.init_app(app)
migrate = Migrate(app, db)

app.json.compact = False
CORS(app)

# db = SQLAlchemy(app)


# Basic Route for setup 
# @app.route('/')
# @app.route('/<int:id>')
# def index(id=0):
#     return render_template("index.html")

# @app.route('/teacher', methods=['GET'])
# def teacher():
#     if request.method == 'GET':
#         teachers = Teacher.query.all()

#         return make_response(
#             jsonify([teacher.to_dict() for teacher in teachers]),
#             200,
#         )
    
#     return make_response(
#         jsonify({"text": "Method Not Allowed"}),
#         405,
#     ) 
class ClearSession(Resource): 
    def delete(self): 
        session['teacher_id'] = None 
        return {}, 204 

class TeacherSignup(Resource): 
    def post(self): 
        teacher_info = Teacher(
            first_name = request.get_json()['first_name'],
            last_name = request.get_json()['last_name'],
            email = request.get_json()['email'],
            username = request.get_json()['username'],
            pin = request.get_json()['pin'],
        )
        teacher = Teacher.query.filter(Teacher.username == teacher_info.username).first()
        password = request.get_json()['password'] 

        if teacher_info.username and password and not teacher: 
            teacher_info.password_hash = password 
            db.session.add(teacher_info) 
            db.session.commit() 
            session['teacher_id'] = teacher_info.id 
            return teacher_info.to_dict(),201 
         
        return {'error': '422 Unprocessable Entity'}, 422 

class StudentSignup(Resource): 
    def post(self): 
        student_info = Student(
            first_name = request.get_json()['first_name'],
            last_name = request.get_json()['last_name'],
            username = request.get_json()['username'],
            DOB = request.get_json()['DOB'],
            school_name = request.get_json()['school_name'],
            classroom = request.get_json()['classroom'],
            accommodations = request.get_json()['accommodations']
        )
        student = Student.query.filter(Student.username == student_info.username).first()
        password = request.get_json()['password'] 

        if student_info.username and password and not student: 
            student_info.password_hash = password 
            db.session.add(student_info) 
            db.session.commit()
            return student_info.to_dict(),201 
         
        return {'error': '422 Unprocessable Entity'}, 422 
    
class CheckSession(Resource): 
    def get(self): 
        print(session)
        if session.get('teacher_id'): 
            user = Teacher.query.filter(Teacher.id == session['teacher_id']).first() 
            return user.to_dict(),200 
        return {}, 204 
    
class Login(Resource): 
    def post(self): 
        username = request.get_json()['username'] 
        password = request.get_json()['password'] 
        teacher = Teacher.query.filter(Teacher.username == username).first() 
        if teacher.authenticate(password): 
            session['teacher_id'] = teacher.id 
            print(session)
            return teacher.to_dict(), 200 
        
        return {'error': '401 Unauthorized'}, 401 
    
class Logout(Resource): 
    def delete(self): 
        session['teacher_id'] = None 
        return {}, 204 
    
class Teachers(Resource):
    def get(self):
        teachers_all = [teachers.to_dict() for teachers in Teacher.query.all()] 
        response = make_response( 
            teachers_all, 
            200, 
        ) 
        return response
    
    #  ADDING TEACHER INFO LIKE SCHOOL NAME, CLASSROOM, VOICE
    # def post(self):
    #     new_teacher = Teacher(
    #         teacher_first=request.get_json()['teacher_first'],
    #         teacher_last=request.get_json()['teacher_last'],
    #     )

    #     # if new_bet.bet_name != Bet.query.filter(Bet.name == new_bet.bet_name).first():
    #     db.session.add(new_bet)
    #     db.session.commit()

    #     response_dict = new_bet.to_dict()

    #     response = make_response(
    #         response_dict,
    #         201,
    #     )

    #     return response

    
class Students(Resource):
    def get(self):
        students_all = [students.to_dict() for students in Student.query.all()] 
        response = make_response( 
            students_all, 
            200, 
        ) 
        return response
    
class Subjects(Resource):
    def get(self):
        subjects_all = [subjects.to_dict() for subjects in Subject.query.all()] 
        response = make_response( 
            subjects_all, 
            200, 
        ) 
        return response

api.add_resource(TeacherSignup, '/teachers/signup')
api.add_resource(StudentSignup, '/students/signup')
api.add_resource(Login, '/login', endpoint='login') 
api.add_resource(Logout, '/logout', endpoint='logout') 
api.add_resource(CheckSession, '/check_session', endpoint='check_session') 
api.add_resource(Teachers, '/teachers', endpoint='teachers') 
api.add_resource(Students, '/students', endpoint='students') 
api.add_resource(Subjects, '/subjects', endpoint='subjects') 

if __name__ == '__main__':
    app.run(port=5555)