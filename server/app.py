import os
from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
from flask_migrate import Migrate

from models import db, Placeholder

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)
migrate = Migrate(app, db)

db.init_app(app)

# Basic Route for setup 
# @app.route('/')
# @app.route('/<int:id>')
# def index(id=0):
#     return render_template("index.html")

@app.route('/placeholder', methods=['GET'])
def placeholder():
    if request.method == 'GET':
        placeholders = Placeholder.query.all()

        return make_response(
            jsonify([placeholder.to_dict() for placeholder in placeholders]),
            200,
        )
    
    return make_response(
        jsonify({"text": "Method Not Allowed"}),
        405,
    ) 

if __name__ == '__main__':
    app.run(port=5555)