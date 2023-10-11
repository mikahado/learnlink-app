
# LearnLink

This is the official monorepo for LearnLink, a TechEd platform dedicated to an enriched educational experience for ALL students through AI-driven accessibility enhancements, ensuring equitable access to learning resources and opportunities. 

- [Getting Started](#getting-started)
- [Features](#features)

Here is the demo:


[<img src="https://github.com/mikahado/learnlink-app/assets/64943455/a0d58957-e3aa-42e5-96ac-73589e178675" width="50%">]
(https://www.youtube.com/watch?v=jujVtMplq9g)


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
   cd server
   python app.py
   ```

2. Open a new terminal and run the React app from the `client/` directory:

   ```
   npm start --prefix client
   ```
### Verify 
React application: [http://127.0.0.1:4000](http://127.0.0.1:4000)
Flask application: [http://127.0.0.1:5555](http://127.0.0.1:5555)
#####

# FEATURES

### Accessibility Features
-WCAG Principles: LearnLink follows the Four principles: Perceivable, Operable, Understandable, Robust (WCAG).
-ARIA: Incorporates ARIA Authoring Practices Guide (APG).
--AAC: The reading curriculum highlights Augmentative and Alternative Communication (AAC) needs.
Visual Design: Promotes high-contrast and color-permitting options for visual variances.
-AI Text-to-Speech: Multi-lingual AI text-to-speech option that offers students the ability to hear their personal teacher's voice.


## AI Setup

### Voice Synthesis and Text-to-Speech

LearnLink utilizes Voice synthesis and text to speech from ElevenLabs. 
```
   pip install elevenlabs
```

### Summarization AI

LearnLink utilizes summarization AI Natural Language Processors from OpenAi

```
   pip install openai
```
=========

### AI
- **Synthetic Speech**: ElevenLabs Technologies to incorporate a teacher's voice in the storytelling. 
- **Text-to-speech**: ElevenLabs to read emotive voice for the stories. 
- **Summarization**: OpenAI ChatGPT API to generate text summaries/morals relative to a student's reading level and bio.

### Backend Development

- **Python:** LearnLink utilizes Python with the Flask framework. This allows for efficient and scalable server-side logic.

### Frontend Development

-React: LearnLink builds the frontend with React.
Tailwind: For CSS, LearnLink utilizes Tailwind.

### Security Considerations

-Cybersecurity: LearnLink prioritizes security with features such as Bcrypt and other backend security measures.



