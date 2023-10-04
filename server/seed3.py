from app import app, db
from models import Teacher, Student, Subject
from random import choice, randint
from app import db, Teacher, Student, Subject
from datetime import datetime
from faker import Faker
import requests  # Import the requests library for making HTTP requests

fake = Faker()

# Function to get a random image URL from Picsum
def get_random_picsum_image():
    response = requests.get('https://picsum.photos/200')  # Adjust the size as needed
    if response.status_code == 200:
        return response.url
    else:
        return None
    
def generate_random_pin():
    return str(randint(10000, 99999))

# Initialize the Flask app and SQLAlchemy

def seed():
    with app.app_context():
        try:
            # Initialize the database
            db.drop_all()

            db.create_all()

            # Create a teacher
            teacher = Teacher(
            first_name="Tim",
            last_name="Jordan",
            username="timteacher",
            email="tim@example.com",
            school_name="Example School",
            classroom="Class A",
            pin=1234,
            voice_id="tim_voice",
            _password_hash="1234"  # Replace with a hashed password
            )

            db.session.add(teacher)

        # Create 20 students with more dynamic attributes
            for i in range(1, 21):

                dob = datetime.strptime("February 2, 2002", "%B %d, %Y")
                student = Student(
                    first_name=fake.first_name(),
                    last_name=fake.last_name(),
                    username=f"{i}",
                    avatar=get_random_picsum_image(),  # Get a random image URL from Picsum
                    DOB=dob,
                    school_name="Quarky Quandary Middle School Academy",
                    classroom=fake.random_element(elements=("Class A", "Class B", "Class C")),
                    accommodations=fake.sentence(),
                    progress=fake.random_int(min=0, max=100),
                    bio=fake.paragraph(),
                    pin=generate_random_pin()
                )

                # Join the student with the "Tim" teacher through subjects
                subject = Subject(
                    name=f"Subject{i}",
                    content=f"Content for Subject{i}"
                )

                subject.teachers.append(teacher)
                subject.students.append(student)
                
                db.session.add(student)
                db.session.add(subject)

            db.session.commit()

        except Exception as e:
                # Handle exceptions and rollback if needed
                db.session.rollback()
                print(f"Error: {str(e)}")

print("Database seeded successfully!")

if __name__ == "__main__":
    seed()
