// gets student info from teacher: useParams()
// /students/:id
// teacher can be through student.teacher or user context
import React from "react";
import StudentNotebook from "./StudentNotebook";
// , { useState, useEffect, useContext }
// import { useParams } from 'react-router-dom';
// import { UserContext } from "../context/user";
// import { Link } from 'react-router-dom';

function StudentHome() {

    return (
        <div className="min-h-screen bg-secondaryPurple text-textBrown">
            <StudentNotebook/>
        </div>
    )

}

export default StudentHome;