#!/usr/bin/env python3

from random import choice as rc

from faker import Faker

from app import app
from models import db, Placeholder

fake = Faker()

def make_placeholders():

    Placeholder.query.delete()
    
    placeholders = []
    for i in range(50):
        m = Placeholder(title=fake.sentence(nb_words=4).title())
        placeholders.append(m)

    db.session.add_all(placeholders)
    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        make_placeholders()