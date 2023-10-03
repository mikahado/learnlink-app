import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoginTeacher from "./teacher/login";
import ClassPage from "./teacher/classpage";
import StudentSetUp from "./teacher/StudentSetUp";
import StudentProfile from "./teacher/studentprofile";
import SignUp from "./teacher/signup";

import React from "react";
import React from 'react'
// import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import StudentHome from './student/StudentHome';
import StudentWorkView from './student/StudentWorkView';
import NavBar from './student/NavBar';
// import TtsParent from './TtsParent'
// import TextToSpeech from './TextToSpeech'
// import TextToSpeechAdd from './TextToSpeechAdd'

const App = () => {
  useEffect(() => {
    fetch("/placeholders")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  // const [voiceId, setVoiceId] = useState("");

  // const handleVoiceIdChange = (newVoiceId) => {
  //   console.log(newVoiceId)
  //   setVoiceId(newVoiceId);
  // };

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/students/:studentId" element={<StudentHome />} />
        <Route path="/students/:studentId/lessons/:lessonId" element={<StudentWorkView />} />
        {/* <Route exact path="/" element={<TtsParent />} />
        <Route exact path="/tts" element={<TextToSpeech teacher_voice_id={voiceId}/>} />
        <Route exact path="/ttsadd" element={<TextToSpeechAdd onVoiceIdChange={handleVoiceIdChange}/>} /> */}
      </Routes>
    </>
  );
}

export default App;