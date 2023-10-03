import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginTeacher from "./teacher/login";
import ClassPage from "./teacher/classpage";
import StudentSetUp from "./teacher/StudentSetUp";
import StudentProfile from "./teacher/studentprofile";
import SignUp from "./teacher/signup";

import React from "react";
// import { useEffect } from "react";
import StudentHome from './student/StudentHome';
import StudentWorkView from './student/StudentWorkView';
import NavBar from './student/NavBar';
import TtsParent from '../src/TtsParent.js'
import TextToSpeech from '../src/TtsParent.js'
import TextToSpeechAdd from '../src/TtsParent.js'

const App = () => {
  useEffect(() => {
    fetch("/placeholders")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  const [voiceId, setVoiceId] = useState("");

  const handleVoiceIdChange = (newVoiceId) => {
    console.log(newVoiceId)
    setVoiceId(newVoiceId);
  };

  return (
    <div>
      <Routes>
        <Route path="/students/:studentId" element={<StudentHome />} />
        <Route path="/students/:studentId/lessons/:lessonId" element={<StudentWorkView />} />
        <Route path="/login" element={<LoginTeacher />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/classpage" element={<ClassPage />} />
        <Route path="/newstudent" element={<StudentSetUp />} />
        <Route path="/studentprofile" element={<StudentProfile />} />
        <Route exact path="/recordvoice" element={<TtsParent />} />
      </Routes>
    </div>
  );
}

export default App;