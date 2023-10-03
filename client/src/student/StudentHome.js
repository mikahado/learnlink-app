// gets student info from teacher: useParams()
// /students/:id
// teacher can be through student.teacher or user context
import React, { useState, useEffect } from "react";
import StudentNotebook from "./StudentNotebook";
import NavBar from './NavBar';
// , { useState, useEffect, useContext }
// import { UserContext } from "../context/user";
// import { Link } from 'react-router-dom';

function StudentHome({ stories }) {

    return (
        <div className="min-h-screen bg-secondaryPurple text-textBrown">
            <NavBar />
            <StudentNotebook stories={stories} />
        </div>
    )

}

export default StudentHome;