#!/usr/bin/env python3

from random import choice as rc

from faker import Faker
from datetime import datetime
from app import app
from models import db, Teacher,Student,Subject

fake = Faker()

student = Student(
    first_name='Alice',
    last_name='Johnson',
    username='alicej',
    avatar='avatar1.jpg',
    DOB=datetime.strptime('2000-01-01', '%Y-%m-%d'),  # Convert date string to datetime
    school_name='Sample School',
    classroom='Class A',
    accomodations='Accommodation 1',
    progress=90,
    bio='This is Alice'
)
students = Student.query.all()
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
    students_teacher=students.id[0]  # Provide the student's ID here
)
# Add the objects to the session and commit to the database

def seed_database():
    db.session.add(student)
    db.session.add(teacher)
    db.session.commit()
    
if __name__ == '__main__':
    with app.app_context():
        seed_database()