import os
from flask import Flask, request, make_response, jsonify, session, redirect, render_template, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api, Resource
from config import app, db, api
from models import Teacher, Student, Subject
from dotenv import load_dotenv
import openai

load_dotenv()

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db.init_app(app)
migrate = Migrate(app, db)
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")

# @app.route('/')
# @app.route('/<int:id>')
# def index(id=0):
#     return render_template("index.html")

    
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
            school_name = request.get_json()['school_name'],
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
            # username = request.get_json()['username'], Not using username
            DOB = request.get_json()['DOB'],
            # school_name = request.get_json()['school_name'],
            pin = request.get_json()['pin'],
            # grade = request.get_json()['grade'],
            # classroom = request.get_json()['classroom'],
            accommodations = request.get_json()['accommodations'],
            bio = request.get_json()['text']
            
        )
        student = Student.query.filter(Student.username == student_info.username).first()
        password = request.get_json()['password'] 

        # if student_info.username and password and not student: 
        #     student_info.password_hash = password 
        #     db.session.add(student_info) 
        #     db.session.commit()
        #     return student_info.to_dict(),201 
         
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
    
    # def patch(self, id):
    #     teacher = Teacher.query.get(id)

    #     if teacher:
    #         new_voice_id = request.get_json().get('newVoiceId')

    #         if new_voice_id is not None:
    #             teacher.voice_id = new_voice_id
    #             db.session.commit()

    #             return jsonify({'message': 'Voice ID updated successfully'}), 200
    #         else:
    #             return jsonify({'error': 'newVoiceId not provided'}), 400
    #     else:
    #         return jsonify({'error': 'Teacher not found'}), 404
        

# In your TeacherUpdate Resource
class TeacherUpdate(Resource):
    def patch(self, id):
        teacher = Teacher.query.filter(Teacher.id == id).first()

        if teacher:
            new_voice_id = request.get_json().get('newVoiceId')

            if new_voice_id is not None:
                    # Convert new_voice_id to str, as it might be received as a dict
                    new_voice_id = str(new_voice_id)

                    # Update the teacher's voice_id
                    teacher.voice_id = new_voice_id

                    # Commit the changes to the database
                    db.session.commit()

                    return make_response(jsonify("hi"), 200)
            

class TeacherCatch(Resource):
    def get(self, id):
        teacher = Teacher.query.filter(Teacher.id == id).first()

        if teacher:
            teacher_info = teacher.to_dict()
            students_info = [student.to_dict() for student in teacher.students]
            teacher_info['students'] = students_info

            return make_response(teacher_info, 200)

        return jsonify({'error': 'Teacher not found'}), 404

    




    
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

class Moral(Resource):
    def post(self):
        request_data = request.get_json()
        story_text = request_data.get('text', '')
        prompt = generate_prompt(story_text)

        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=prompt,
            temperature=0.9,
            max_tokens=500
        )
        moral_text = response.choices[0].text.strip()

        return jsonify({'moral': moral_text})
    

def generate_prompt(input_text):
    return f"""{input_text}
    
    Summarize the moral of Aesop's fable in 280 characters or less. Write it for elementary school students with accessibility needs. Use fun, meaningful emojis to assist in reading comprehension. 

    """.format(
            input_text.capitalize()
        )

api.add_resource(ClearSession, '/clear_session', endpoint='clear_session')
api.add_resource(TeacherSignup, '/teachers/signup', endpoint='teachers/signup')
api.add_resource(StudentSignup, '/students/signup', endpoint='students/signup')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')
api.add_resource(Teachers, '/teachers', endpoint='teachers')
api.add_resource(Students, '/students', endpoint='students')
api.add_resource(Subjects, '/subjects', endpoint='subjects')
api.add_resource(Moral, '/moral')
api.add_resource(TeacherUpdate, '/teachers/<int:id>', endpoint='teacher')
api.add_resource(TeacherCatch, '/teachers/<int:id>', endpoint='teacher_info')


if __name__ == '__main__':
    app.run(port=5555)