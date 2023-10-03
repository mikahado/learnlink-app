import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

function NavBar() {

return (
    <div className="bg-primaryPurple flex justify-between p-4">
        <button className="py-2 px-4 bg-textGround mx-8 rounded text-buttonTextGreen">Student Name</button>
        <button className="py-2 px-4 bg-textGround mx-8 rounded text-buttonTextGreen">
            <span>Help </span>
            <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
        </button>
        <button className="py-2 px-4 bg-textGround mx-8 rounded text-buttonTextGreen">Teacher Name</button>
    </div>
)

}

export default NavBar;