import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faAdjust, faTextHeight, faEyeSlash, faEye, faBook } from '@fortawesome/free-solid-svg-icons';

function AccessibilityButtons({ showImages, onShowImagesToggle, onTextSizeToggle, onBionicReaderToggle }) {

    function handleShowImagesToggle() {
        onShowImagesToggle();
    }

    function handleTextSizeToggle() {
        onTextSizeToggle();
    }

    function handleBionicReaderToggle() {
        onBionicReaderToggle();
    }

    return (
        <div className="flex flex-row md:flex-col justify-start  md:space-y-4 items-center space-x-2 md:space-x-0">

            <button 
                onClick={handleShowImagesToggle} 
                className="w-24 h-24 flex flex-col justify-center items-center rounded-lg bg-textGround text-buttonTextGreen"
            >
                {showImages ? <FontAwesomeIcon icon={faEyeSlash} size="lg" /> : <FontAwesomeIcon icon={faEye} size="lg" />}
                <span>{showImages ? "Reader View" : "Show Images"}</span>
            </button>

            <button className="w-24 h-24 flex flex-col justify-center items-center rounded-lg bg-textGround text-buttonTextGreen">
                <FontAwesomeIcon icon={faVolumeUp} size="lg" />
                <span>Read Aloud</span>
            </button>

            <button 
                onClick={handleTextSizeToggle}
                className="w-24 h-24 flex flex-col justify-center items-center rounded-lg bg-textGround text-buttonTextGreen"
            >
                <FontAwesomeIcon icon={faTextHeight} size="lg" />
                <span>Text Size</span>
            </button>

            <button className="w-24 h-24 flex flex-col justify-center items-center rounded-lg bg-textGround text-buttonTextGreen">
                <FontAwesomeIcon icon={faAdjust} size="lg" />
                <span>Adjust Contrast</span>
            </button>

            <button 
                onClick={handleBionicReaderToggle}
                className="w-24 h-24 flex flex-col justify-center items-center rounded-lg bg-textGround text-buttonTextGreen"
            >
                <FontAwesomeIcon icon={faBook} size="lg" />
                <span>Bionic Reader</span>
            </button>
        </div>

    )
}

export default AccessibilityButtons;