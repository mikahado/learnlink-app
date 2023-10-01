import React from 'react'
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';

import TtsParent from './TtsParent'
import TextToSpeech from './TextToSpeech'
import TextToSpeechAdd from './TextToSpeechAdd'

const App = () => {

  const [voiceId, setVoiceId] = useState("");

  const handleVoiceIdChange = (newVoiceId) => {
    console.log(newVoiceId)
    setVoiceId(newVoiceId);
  };

  return (
  <>
      <Routes>
        <Route exact path="/" element={<TtsParent />} />
        <Route exact path="/tts" element={<TextToSpeech teacher_voice_id={voiceId}/>} />
        <Route exact path="/ttsadd" element={<TextToSpeechAdd onVoiceIdChange={handleVoiceIdChange}/>} />
      </Routes>

  </>
  )
  
=======
// import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentHome from './student/StudentHome';

const App = () => {

  // useEffect(() => {
  //   fetch("/placeholders")
  //     .then((r) => r.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/students/:studentId" element={<StudentHome />} />
        </Routes>
      </Router>

    </>
  );
>>>>>>> remotes/origin/frontend/student
}

export default App