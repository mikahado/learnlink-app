
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
### Verify 
React application: [http://127.0.0.1:4000](http://127.0.0.1:4000)
Flask application: [http://127.0.0.1:5555](http://127.0.0.1:5555)
#####

# FEATURES

### Accessibility Features
- Four principles: Perceivable, Operable, Understandable, Robust (WCAG).
- Incorporates ARIA Authoring Practices Guide (APG).
- Reading curriculum highlights Augmentative and Alternative Communication (AAC) needs.
- Visual design promotes high-contrast and color-permitting options for visual variances.
- Multi-lingual AI text-to-speech option that offers the student to hear their personal teacher's voice. 

<<<<<<<<< Temporary merge branch 1
- React application: [http://127.0.0.1:4000](http://127.0.0.1:4000)
- Flask application: [http://127.0.0.1:5555](http://127.0.0.1:5555)


## AI Eleven Lab Setup
```
   pip install elevenlabs
   ```

   ```
   brew install ffmpeg
   ```
=========

### AI
- **Synthetic Speech**: Technologies to incorporate a teacher's voice in the storytelling. 
- **Summarization**: ChatGPT API to generate text summaries/morals relative to a student's reading level and bio.
- **Text-to-speech**: Bark model to read emotive voice for the stories. 

### Backend Development

- **Python:** LearnLink utilizes Python with the Flask framework. This allows for efficient and scalable server-side logic.
- **AWS:** Manages Python dependencies with consistent environments and package management.

### Frontend Development

-**React:**
-**Javascript:**

### Security Considerations

- **Cybersecurity:**

### Testing and Deployment

- **Web Browsers:** Both frontend and backend applications can be tested in web browsers.
>>>>>>>>> Temporary merge branch 2
