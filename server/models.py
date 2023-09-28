from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from config import db, bcrypt
from sqlalchemy.orm import validates 

db = SQLAlchemy()

# class Placeholder(db.Model, SerializerMixin):
#     __tablename__ = 'placeholders'

#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String)

#     def __repr__(self):
#         return f'<Placeholder {self.title}>'
    
class Teacher(db.Model, SerializerMixin):
    __tablename__ = 'teachers'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    username = db.Column(db.String)
    email = db.Column(db.String)
    school_name = db.Column(db.String)
    classroom = db.Column(db.String)
    pin = db.Column(db.Integer)
    voice = db.Column(db.Integer)

    students = db.relationship('Student', backref='teacher', lazy=True)

    @validates('email')
    def validate_name(self, key, email):
        emails = db.session.query(Teacher.email).all()
        if not email:
            raise ValueError("Name field is required.")
        elif email in emails:
            raise ValueError("Name must be unique.")
        return email
    
    @validates('pin')
    def validate_name(self, key, pin):
        # pins = db.session.query(Teacher.pin).all()
        if len(str(pin)) != 4:
            raise ValueError("Pin must be four digits")
        return pin

    def __repr__(self):
        return f'<Teacher {self.title}>'
    
class Student(db.Model, SerializerMixin):
    __tablename__ = 'students'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    username = db.Column(db.String)
    avatar = db.Column(db.String)
    DOB = db.Column(db.DateTime)
    school_name = db.Column(db.String)
    classroom = db.Column(db.String)
    accomodations = db.Column(db.String)
    progress = db.Column(db.Array)
    bio = db.Column(db.String)

    teacher_id = db.Column(db.Integer, db.ForeignKey('teacher.id'), nullable=False)

    
    @validates('bio')
    def validate_name(self, key, bio):
        # pins = db.session.query(Teacher.pin).all()
        if len(str(bio)) > 250:
            raise ValueError("Bio must be less than 250 characters")
        return bio

    def __repr__(self):
        return f'<Student {self.title}>'
    