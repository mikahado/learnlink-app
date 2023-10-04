import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MaskFace from "../teacher/Mask group.png";
import { Link } from 'react-router-dom';
import { UserContext } from "../context/user";

function NavBar() {

    const { teacherData } = useContext(UserContext);

    return (
        <div className="bg-primaryPurple flex justify-between items-center p-4 ">
            <Link to={`/students/1`}>
            <button className="h-12 py-2 px-4 bg-textGround mx-8 rounded-lg text-buttonTextGreen flex items-center justify-center">
                <span className="pr-3">Joey W.</span>
                <img src={MaskFace} alt="Student Avatar" className="w-8 h-8"/>
            </button>
            </Link>
            <button className="h-12 w-32 flex flex-row justify-center items-center rounded-lg bg-textGround text-buttonTextGreen p-4 text-sm">
                <img src="/hand_icon_125264.png" alt="Help" className="h-8 w-8 mr-2"/>
                <span>Help</span>
            </button>
            <button className="h-12 py-2 px-4 bg-textGround mx-8 rounded-lg text-buttonTextGreen flex items-center justify-center">
                {"Mr. Jordan"}
            </button>
        </div>

    )

}

export default NavBar;