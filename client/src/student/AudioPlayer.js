import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRepeat } from '@fortawesome/free-solid-svg-icons';

function AudioPlayer({ audio }) {

    //const [isPaused, setIsPaused] = useState(false);
    //const [isEnded, setIsEnded] = useState(audio.ended);

    function handlePlayClick() {
        audio.play();
        //setIsPaused(audio.paused);
    }

    function handlePauseClick() {
        audio.pause();
        //setIsPaused(audio.paused);
    }

    function handleReplayClick() {
        audio.currentTime = 0;
        //setIsEnded(audio.ended);
    }

   //d console.log(isEnded)

    return (
        <div className="flex justify-center items-center mx-auto p-4 w-3/4 md:w-3/4 lg:w-1/2 border rounded space-x-6">
            <button 
                className={`py-2 px-4 bg-green-500 text-white rounded flex flex-col items-center justify-center`} 
                onClick={handlePlayClick}
                disabled={false}
            >
                <FontAwesomeIcon icon={faPlay} size="lg" />
                <span>Play</span>
            </button>

            <button 
                className={`py-2 px-4 bg-red-500 text-white rounded flex flex-col items-center justify-center`}
                onClick={handlePauseClick}
                disabled={false}
            >
                <FontAwesomeIcon icon={faPause} size="lg" />
                <span>Pause</span>
            </button>

            <button 
                className={`py-2 px-4 bg-blue-500 text-white rounded flex flex-col items-center justify-center`}
                disabled={false}
                onClick={handleReplayClick}
            >
                <FontAwesomeIcon icon={faRepeat} size="lg" />
                <span>Start Over</span>
            </button>

        </div>

    )
}

export default AudioPlayer;