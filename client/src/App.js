import React from 'react'
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
  
}

export default App