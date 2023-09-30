import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoginTeacher from "./teacher/login";

import React from "react";

const App = () => {
  useEffect(() => {
    fetch("/placeholders")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <Routes>
        <Route exact path="/login" element={<LoginTeacher/>}/>
      </Routes>
    </div>
  );
};

export default App;
