import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
//import { UserContext } from "../context/user";

function NavBar() {

    //const { user, setUser } = useContext(UserContext);

    return (
        <div className="bg-primaryPurple flex justify-between p-4">
            <Link to={`/students/1`}><button className="py-2 px-4 bg-textGround mx-8 rounded text-buttonTextGreen">Student Name</button></Link>
            <button className="py-2 px-4 bg-textGround mx-8 rounded text-buttonTextGreen">
                <span>Help </span>
                <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
                {/* <div className="help-button"></div> */}
            </button>
            <button className="py-2 px-4 bg-textGround mx-8 rounded text-buttonTextGreen">Teacher Name</button>
        </div>
    )

}

export default NavBar;