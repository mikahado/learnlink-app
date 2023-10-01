
## Mono-repository for Hackathon (includes both frontend and backend starter files)

This is a template to quickly set up a project for a hackathon. It contains both frontend and backend starter files.

### Getting Started

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

### Running the Applications

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


## AI Eleven Lab Setup
```
   pip install elevenlabs
   ```

   ```
   brew install ffmpeg
   ```