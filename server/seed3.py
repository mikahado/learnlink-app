from app import app, db
from models import Teacher, Student
from random import choice
from app import db, Teacher, Student, Subject

# Initialize the Flask app and SQLAlchemy

def seed():
    with app.app_context():
        # Create the "Tim" teacher
        tim = Teacher(
            first_name="Tim",
            last_name="Teacher",
            username="timteacher",
            email="tim@example.com",
            school_name="Example School",
            classroom="Class A",
            pin=1234,
            voice_id="tim_voice",
            _password_hash="hashed_password_here"  # Replace with a hashed password
        )

        db.session.add(tim)

        # Create 20 students with funny names
        for i in range(1, 21):
            student = Student(
                first_name=f"FunnyStudent{i}",
                last_name="Student",
                username=f"funnystudent{i}",
                avatar="avatar_url_here",  # Replace with avatar URL
                DOB="DOB_here",  # Replace with date of birth
                school_name="Example School",
                classroom="Class A",
                accommodations="Accommodations details here",
                progress=0,
                bio="Bio information here"
            )

            db.session.add(student)

            # Join the student with the "Tim" teacher through subjects
            subject = Subject(
                name=f"Subject{i}",
                content=f"Content for Subject{i}"
            )

            subject.teachers.append(tim)
            subject.students.append(student)

            db.session.add(subject)

        db.session.commit()

if __name__ == "__main__":
    seed()
