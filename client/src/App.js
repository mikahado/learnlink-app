import React from 'react'
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentHome from './student/StudentHome';


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
        <Route path="/students/:studentId" element={<StudentHome />} />
        <Route exact path="/tts-main" element={<TtsParent />} />
        <Route exact path="/tts-read" element={<TextToSpeech teacher_voice_id={voiceId}/>} />
        <Route exact path="/tts-add" element={<TextToSpeechAdd onVoiceIdChange={handleVoiceIdChange}/>} />
      </Routes>
  </>
  )
}
  
export default App