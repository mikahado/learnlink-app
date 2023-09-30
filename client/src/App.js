import React from 'react'
import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';

import TextToSpeech from './TextToSpeech'
import TextToSpeechAdd2 from './TextToSpeechAdd'

const App = () => {

  // useEffect(() => {
  //   fetch("/placeholders")
  //     .then((r) => r.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
  <>
      <Routes>

        <Route exact path="/tts" element={<TextToSpeech />} />
        <Route exact path="/ttsadd" element={<TextToSpeechAdd2 />} />

      </Routes>

  </>
  )
  
}

export default App