from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from config import db, bcrypt
from sqlalchemy.orm import validates 
from sqlalchemy.ext.hybrid import hybrid_property 

db = SQLAlchemy()

# class Placeholder(db.Model, SerializerMixin):
#     __tablename__ = 'placeholders'

#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String)

#     def __repr__(self):
#         return f'<Placeholder {self.title}>'
    
students_rel = db.Table('students_subject',
    db.Column('student_id', db.Integer, db.ForeignKey('students.id'), primary_key=True),
    db.Column('subject_id', db.Integer, db.ForeignKey('subjects.id'), primary_key=True)
)
teachers_rel = db.Table('teachers_subject',
    db.Column('teacher_id', db.Integer, db.ForeignKey('teachers.id'), primary_key=True),
    db.Column('subject_id', db.Integer, db.ForeignKey('subjects.id'), primary_key=True)
)

class Teacher(db.Model, SerializerMixin):
    __tablename__ = 'teachers'

    # serialize_rules = ('-students.teacher','-subjects.teacher')
    serialize_rules = ('-students.teacher',)

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    username = db.Column(db.String)
    email = db.Column(db.String)
    school_name = db.Column(db.String)
    classroom = db.Column(db.String)
    pin = db.Column(db.Integer)
    voice_id = db.Column(db.String)
    _password_hash = db.Column(db.String)

    # subject = db.Column(db.Integer, db.ForeignKey('subjects.id'), nullable=False)
    students_teacher = db.Column(db.Integer, db.ForeignKey('students.id'), nullable=False)
    # student = db.Column('Student', backref='teacher', lazy=True)

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

    # serialize_rules = ('-subjects.student',)

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    username = db.Column(db.String)
    avatar = db.Column(db.String)
    DOB = db.Column(db.DateTime)
    school_name = db.Column(db.String)
    classroom = db.Column(db.String)
    accommodations = db.Column(db.String)
    progress = db.Column(db.Integer)
    bio = db.Column(db.String)

    # teacher = db.Column(db.Integer, db.ForeignKey('teachers.id'), nullable=False)
    teachers = db.relationship('Teacher', backref='students', lazy=True)
    # subject = db.relationship(db.Integer, db.ForeignKey('subjects.id'), nullable=False)

    
    @validates('bio')
    def validate_name(self, key, bio):
        # pins = db.session.query(Teacher.pin).all()
        if len(str(bio)) > 250:
            raise ValueError("Bio must be less than 250 characters")
        return bio

    def __repr__(self):
        return f'<Student {self.title}>'
    
class Subject(db.Model, SerializerMixin):
    __tablename__ = 'subjects'

    # serialize_rules = ('-teacher.subjects','-student.subjects')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    content = db.Column(db.String)
    
    students_subject = db.relationship('Student', secondary=students_rel,backref=db.backref('subjects', lazy='dynamic'))
    teachers_subject  = db.relationship('Teacher', secondary=teachers_rel,backref=db.backref('subjects', lazy='dynamic'))
    # teacher = db.relationship('Student', backref='subject', lazy=True)
