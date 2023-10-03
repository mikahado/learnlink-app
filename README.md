
# LearnLink

This is the official monorepo for LearnLink, a TechEd platform dedicated to an enriched educational experience for ALL students through AI-driven accessibility enhancements, ensuring equitable access to learning resources and opportunities. 

- [Getting Started](#getting-started)
- [Features](#features)

## Getting Started

If you don't have Python installed: refer to the [Python Installation Guide](https://github.com/learn-co-curriculum/flatiron-python-flask-curriculum) for instructions.

1. To set up the client (frontend), run the following command in the `client` directory:

   ```
   npm install
   ```

2. To enter your virtual environment in the root directory, use the following commands:

   ```
   pipenv install
   pipenv shell
   ```

3. In the server directory, set the Flask app and port with these commands:

   ```
   export FLASK_APP=app.py
   export FLASK_RUN_PORT=5555
   ```

### Running 

1. From the server directory, run the Flask server:

   ```
   python app.py
   ```

2. Open a new terminal and run the React app from the `client/` directory:

   ```
   npm start
   ```

### Verify Your Setup

To check if everything is working, visit the following URLs in your web browser:

- React application: [http://127.0.0.1:4000](http://127.0.0.1:4000)
- Flask application: [http://127.0.0.1:5555](http://127.0.0.1:5555)
