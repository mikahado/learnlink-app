from app import app, db
from models import Teacher, Student
from random import choice

def create_teacher(first_name, last_name, username, email, school_name, classroom, pin, voice_id, password, students):
    teacher = Teacher(
        first_name=first_name,
        last_name=last_name,
        username=username,
        email=email,
        school_name=school_name,
        classroom=classroom,
        pin=pin,
        voice_id=voice_id,
        _password_hash=password,
        students=students
    )
    db.session.add(teacher)

def create_student(first_name, last_name, username, avatar, dob, school_name, classroom, accommodations, progress, bio):
    student = Student(
        first_name=first_name,
        last_name=last_name,
        username=username,
        avatar=avatar,
        DOB=dob,
        school_name=school_name,
        classroom=classroom,
        accommodations=accommodations,
        progress=progress,
        bio=bio
    )
    db.session.add(student)

def seed_database():
    students = []

    for _ in range(50):
        first_name = choice(["Alice", "Bob", "Charlie", "David", "Eve"])
        last_name = "Doe"
        username = first_name.lower()
        email = f"{username}@example.com"
        school_name = "Sample School"
        classroom = choice(["Class A", "Class B", "Class C"])
        pin = 1234  # You can generate random pins if needed
        voice_id = f"voice_{username}"
        password = "hashed_password"

        create_teacher(first_name, last_name, username, email, school_name, classroom, pin, voice_id, password, students)

        for _ in range(10):
            first_name = choice(["Alice", "Bob", "Charlie", "David", "Eve"])
            last_name = "Johnson"
            username = first_name.lower()
            avatar = f"avatar_{username}.jpg"
            dob = "2000-01-01"  # You can generate random DOB if needed
            school_name = "Sample School"
            classroom = choice(["Class A", "Class B", "Class C"])
            accommodations = "Accommodation 1"
            progress = 90  # You can generate random progress if needed
            bio = f"This is {first_name}"

            create_student(first_name, last_name, username, avatar, dob, school_name, classroom, accommodations, progress, bio)

    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        seed_database()
