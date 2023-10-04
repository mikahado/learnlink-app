import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust, faTextHeight, faEyeSlash, faEye, faBook } from '@fortawesome/free-solid-svg-icons';
import TextToSpeech from "./TextToSpeech";
import stories from "../Readings";

function AccessibilityButtons({ showImages, onShowImagesToggle, onTextSizeToggle, onBionicReaderToggle, onSetAudioPlayer, showPlayer, onError }) {

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
        <div className="flex flex-row md:flex-col justify-start md:space-y-4 items-center space-x-2 md:space-x-0">

            <TextToSpeech teacher_name="Teacher Name" text={stories[1]} onSetAudioPlayer={onSetAudioPlayer} showPlayer={showPlayer} onError={onError} />
            {/* FOR TEACHER VOICE ADD: teacher_voice_id={voiceId} */}
            
            <button 
                onClick={handleShowImagesToggle} 
                className="w-24 h-24 flex flex-col justify-center items-center rounded-lg bg-textGround text-buttonTextGreen px-2 py-3 text-sm"
            >
                {/* {showImages ? <FontAwesomeIcon icon={faEyeSlash} size="lg" /> : <FontAwesomeIcon icon={faEye} size="lg" />}
                <span>{showImages ? "Reader View" : "Show Images"}</span> */}
                <img src="/image-outline-filled.png" alt="Show Images" className="w-full h-full object-cover"/>
                <span>Pictures</span>
            </button>

            <button 
                onClick={handleTextSizeToggle}
                className="w-24 h-24 flex flex-col justify-center items-center rounded-lg bg-textGround text-buttonTextGreen p-4 pb-2 text-sm"
            >
                {/* <FontAwesomeIcon icon={faTextHeight} size="lg" />
                <span>Text Size</span> */}
                <img src="/text-size.png" alt="Show Images" className="w-full h-full object-cover pb-2"/>
                <span>Text Size</span>
            </button>

            <button className="w-24 h-24 flex flex-col justify-center items-center rounded-lg bg-textGround text-buttonTextGreen p-4 pb-2 text-sm">
                {/* <FontAwesomeIcon icon={faAdjust} size="lg" />
                <span>Adjust Contrast</span> */}
                <img src="/colors-icon.webp" alt="Show Images" className="w-full h-full object-cover pb-1"/>
                <span>Colors</span>
            </button>

            <button 
                onClick={handleBionicReaderToggle}
                className="w-24 h-24 flex flex-col justify-center items-center rounded-lg bg-textGround text-buttonTextGreen p-4 pb-2 text-sm"
            >
                {/* <FontAwesomeIcon icon={faBook} size="lg" />
                <span>Bionic Reader</span> */}
                <img src="https://cdn-icons-png.flaticon.com/512/1945/1945958.png" alt="Show Images" className="w-full h-full object-cover pb-1"/>
                <span>Reader</span>
            </button>
        </div>

    )
}

export default AccessibilityButtons;