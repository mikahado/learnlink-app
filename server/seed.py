#!/usr/bin/env python3

from random import choice as rc

from faker import Faker
from datetime import datetime
from app import app
from models import db, Teacher,Student,Subject

fake = Faker()

# student = Student(
#     first_name='Alice',
#     last_name='Johnson',
#     username='alicej',
#     avatar='avatar1.jpg',
#     DOB=datetime.strptime('2000-01-01', '%Y-%m-%d'),  # Convert date string to datetime
#     school_name='Sample School',
#     classroom='Class A',
#     accomodations='Accommodation 1',
#     progress=90,
#     bio='This is Alice'
# )

def seed_database():
    with app.app_context():
        student = Student(
            first_name='Alice',
            last_name='Johnson',
            username='alicej',
            avatar='avatar1.jpg',
            DOB=datetime.strptime('2000-01-01', '%Y-%m-%d'),
            school_name='Sample School',
            classroom='Class A',
            accommodations='Accommodation 1',
            progress=90,
            bio='This is Alice'
        )

        # No need to query students here, as you're creating a new one
        teacher = Teacher(
            first_name='John',
            last_name='Doe',
            username='johndoe',
            email='johndoe@example.com',
            school_name='Sample School',
            classroom='Class A',
            pin=1234,
            voice_id='voice123',
            _password_hash='hashed_password',
            students_teacher=[student]  # Assign the student directly
        )

        # Add the objects to the session and commit to the database
        db.session.add(student)
        db.session.add(teacher)
        db.session.commit()

# students = Student.query.all()
# teacher = Teacher(
#     first_name='John',
#     last_name='Doe',
#     username='johndoe',
#     email='johndoe@example.com',
#     school_name='Sample School',
#     classroom='Class A',
#     pin=1234,
#     voice_id='voice123',
#     _password_hash='hashed_password',
#     students_teacher=db.session.query(Student.id).first() # Provide the student's ID here
# )
# Add the objects to the session and commit to the database

# def seed_database():
#     db.session.add(student)
#     # db.session.add(teacher)
#     db.session.commit()

# # print(Student.query.filter_by(first_name = student.first_name).id)
# print(db.session.query(Student.id).first())

if __name__ == '__main__':
    with app.app_context():
        seed_database()