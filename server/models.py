from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()

class Placeholder(db.Model, SerializerMixin):
    __tablename__ = 'placeholders'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)

    def __repr__(self):
        return f'<Placeholder {self.title}>'
    