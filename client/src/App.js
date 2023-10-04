import { useEffect, useState,createContext } from "react";
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
export const TeacherContext = createContext()

const App = () => {
  // useEffect(() => {
  //   fetch("/placeholders")
  //     .then((r) => r.json())
  //     .then((data) => console.log(data));
  // }, []);

  const [voiceId, setVoiceId] = useState("");
  const [teacher,setTeacher] = useState([]);

  const handleVoiceIdChange = (newVoiceId) => {
    console.log(newVoiceId)
    setVoiceId(newVoiceId);
  };

  return (
    <TeacherContext.Provider value={[teacher,setTeacher]}>
    <div>
      <Routes>
        <Route path="/students/:studentId" element={<StudentHome stories={stories} />} />
        <Route path="/students/:studentId/lessons/:lessonId" element={<StudentWorkView stories={stories} />} />
        <Route path="/login" element={<LoginTeacher />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/classpage" element={<ClassPage />} />
        <Route path="/newstudent" element={<StudentSetUp />} />
        <Route path="/studentprofile" element={<StudentProfile />} />
        <Route exact path="/recordvoice" element={<TtsParent />} />
      </Routes>
    </div>
      </TeacherContext.Provider>
  );
}

export default App;