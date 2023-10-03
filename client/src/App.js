import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoginTeacher from "./teacher/login";
import ClassPage from "./teacher/classpage";
import StudentSetUp from "./teacher/StudentSetUp";

import React from "react";

const App = () => {
  useEffect(() => {
    fetch("/placeholders")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="font-inter">
      <Routes>
        <Route exact path="/login" element={<LoginTeacher/>}/>
        <Route exact path="/classpage" element={<ClassPage/>}/>
        <Route exact path="/newstudent" element={<StudentSetUp/>}/>
      </Routes>
    </div>
  );
};

export default App;
