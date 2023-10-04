import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
//import { UserContext } from "../context/user";

function NavBar() {

    //const { user, setUser } = useContext(UserContext);

    return (
        <div className="bg-primaryPurple flex justify-between items-center p-2 ">
            <Link to={`/students/1`}>
                <button className="h-12 py-2 px-4 bg-textGround mx-8 rounded-lg text-buttonTextGreen flex items-center justify-center">
                    Student Name
                </button>
            </Link>
            <button className="h-12 w-32 flex flex-row justify-center items-center rounded-lg bg-textGround text-buttonTextGreen p-4 text-sm">
                <img src="/hand_icon_125264.png" alt="Help" className="h-8 w-8 mr-2"/>
                <span>Help</span>
            </button>
            <button className="h-12 py-2 px-4 bg-textGround mx-8 rounded-lg text-buttonTextGreen flex items-center justify-center">
                Teacher Name
            </button>
        </div>

    )

}

export default NavBar;