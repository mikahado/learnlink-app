#!/usr/bin/env python3

from random import choice as rc

from faker import Faker
from datetime import datetime
from app import app
from models import db, Teacher, Student, Subject

fake = Faker()

student = Student(
    first_name='Alice',
    last_name='Johnson',
    username='alicej',
    avatar='avatar1.jpg',
    DOB=datetime.strptime('2000-01-01', '%Y-%m-%d'),  # Convert date string to datetime
    school_name='Sample School',
    classroom='Class A',
    accommodations='Accommodation 1',
    progress=90,
    bio='This is Alice'
)

def seed_database1():
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


def seed_database():
    db.session.add(student)
    db.session.commit()
    # db.session.add(teacher)
    # db.session.commit()

# # print(Student.query.filter_by(first_name = student.first_name).id)
# print(db.session.query(Student.id).first())
subject1 = Subject(name='Math', content='Math content')
subject2 = Subject(name='Science', content='Science content')
subject3 = Subject(name='History', content='History content')

if __name__ == '__main__':
    with app.app_context():
        # seed_database()
        student_id = db.session.query(Student.id).first()[0]

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
            students_teacher=student_id  # Provide the student's ID here
        )

        # Add the objects to the session and commit to the database
        db.session.add(teacher)
        db.session.commit()

        subject1.students_subject.append(student)
        subject1.teachers_subject.append(teacher)
        subject2.students_subject.append(student)
        subject2.teachers_subject.append(teacher)
        subject3.students_subject.append(student)
        subject3.teachers_subject.append(teacher)

        db.session.add_all([subject1, subject2, subject3])
        db.session.commit()
        # obj = Teacher.query.filter_by(id=2).first()
        # db.session.delete(obj)
        # db.session.commit()
