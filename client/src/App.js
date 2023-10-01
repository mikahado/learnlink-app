import React from 'react'
// import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentHome from './student/StudentHome';
import StudentWorkView from './student/StudentWorkView';

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
          <Route path="/students/:studentId/lessons/:lessonId" element={<StudentWorkView />} />
        </Routes>
      </Router>

    </>
  );
}

export default App