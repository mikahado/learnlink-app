from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from config import db, bcrypt
from sqlalchemy.orm import validates 
from sqlalchemy.ext.hybrid import hybrid_property 
from sqlalchemy import ForeignKey
# from app import db


# db = SQLAlchemy()

class Teacher(db.Model, SerializerMixin):
    __tablename__ = 'teachers'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    username = db.Column(db.String)
    email = db.Column(db.String)
    school_name = db.Column(db.String)
    classroom = db.Column(db.String)
    pin = db.Column(db.Integer) # No pin for teacher
    voice_id = db.Column(db.String)
    _password_hash = db.Column(db.String)

    # Define the many-to-many relationship with subjects
    subjects = db.relationship('Subject', secondary='teacher_subjects', back_populates='teachers')
    students = db.relationship('Student', backref='teacher', lazy=True)

    @hybrid_property
    def password_hash(self):
        raise Exception('Password hashes may not be viewed.')

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))

    @validates('email')
    def validate_name(self, key, email):
        emails = db.session.query(Teacher.email).all()
        if not email:
            raise ValueError("Email field is required.")
        elif email in emails:
            raise ValueError("Email must be unique.")
        return email
    
    # @validates('pin')
    # def validate_name(self, key, pin):
    #     if len(str(pin)) != 4:
    #         raise ValueError("Pin must be four digits")
    #     return pin

    def __repr__(self):
        return f'<Teacher {self.first_name} {self.last_name}>'


class Student(db.Model, SerializerMixin):
    __tablename__ = 'students'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    username = db.Column(db.String)
    pin = db.Column(db.Integer) # Add
    # grade = db.Column(db.Integer) # Don't add
    avatar = db.Column(db.String)
    DOB = db.Column(db.DateTime)
    school_name = db.Column(db.String)
    classroom = db.Column(db.String)
    accommodations = db.Column(db.String)
    progress = db.Column(db.Integer)
    bio = db.Column(db.String)
    # notes = db.Column(db.String) # Don't add

    # Define the many-to-many relationship with subjects
    subjects = db.relationship('Subject', secondary='student_subjects', back_populates='students')
    teacher_id = db.Column(db.Integer, db.ForeignKey('teachers.id'))
    @validates('bio')
    def validate_name(self, key, bio):
        if len(str(bio)) > 250:
            raise ValueError("Bio must be less than 250 characters")
        return bio

    def __repr__(self):
        return f'<Student {self.first_name} {self.last_name}>'


class Subject(db.Model):
    __tablename__ = 'subjects'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    content = db.Column(db.String)

    # Define the many-to-many relationship with teachers and students
    teachers = db.relationship('Teacher', secondary='teacher_subjects', back_populates='subjects')
    students = db.relationship('Student', secondary='student_subjects', back_populates='subjects')

# Define the many-to-many association tables
    teacher_subjects = db.Table('teacher_subjects',
        db.Column('teacher_id', db.Integer, db.ForeignKey('teachers.id'), primary_key=True),
        db.Column('subject_id', db.Integer, db.ForeignKey('subjects.id'), primary_key=True)
    )

    student_subjects = db.Table('student_subjects',
        db.Column('student_id', db.Integer, db.ForeignKey('students.id'), primary_key=True),
        db.Column('subject_id', db.Integer, db.ForeignKey('subjects.id'), primary_key=True)
    )
