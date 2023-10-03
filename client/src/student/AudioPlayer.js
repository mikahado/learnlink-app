import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRepeat } from '@fortawesome/free-solid-svg-icons';

function AudioPlayer({ audio }) {

    const [isPlaying, setIsPlaying] = useState(false);
    const [isEnded, setIsEnded] = useState(false);
    const [atStart, setAtStart] = useState(true);

    useEffect(() => {
        audio.addEventListener('ended', handleAudioEnd);
        audio.addEventListener('pause', handleAudioPause);

        return () => {
            // Clean up event listeners
            audio.removeEventListener('ended', handleAudioEnd);
            audio.removeEventListener('pause', handleAudioPause);
        };
    }, [audio]);

    function handleAudioEnd() {
        setIsPlaying(false);
        setIsEnded(true);
        setAtStart(true);
    }

    function handleAudioPause() {
        setIsPlaying(false);
    }

    function handlePlayClick() {
        audio.play();
        setIsPlaying(true);
        setAtStart(false);
    }

    function handlePauseClick() {
        audio.pause();
        setIsPlaying(false);
    }

    function handleReplayClick() {
        audio.currentTime = 0;
        setAtStart(true);
    }

    return (
        <div className="flex justify-center items-center mx-auto p-4 w-3/4 md:w-3/4 lg:w-1/2 border rounded space-x-6">
            <button 
                className={`py-2 px-4 ${isPlaying ? "bg-gray-400" : "bg-green-500"} text-white rounded flex flex-col items-center justify-center`} 
                onClick={handlePlayClick}
                disabled={isPlaying}
            >
                <FontAwesomeIcon icon={faPlay} size="lg" />
                <span>Play</span>
            </button>

            <button 
                className={`py-2 px-4 ${isPlaying ? "bg-red-500" : "bg-gray-400"} text-white rounded flex flex-col items-center justify-center`}
                onClick={handlePauseClick}
                disabled={!isPlaying}
            >
                <FontAwesomeIcon icon={faPause} size="lg" />
                <span>Pause</span>
            </button>

            <button 
                className={`py-2 px-4 ${isPlaying || atStart ? "bg-gray-400" : "bg-blue-500"} text-white rounded flex flex-col items-center justify-center`}
                disabled={atStart || isPlaying}
                onClick={handleReplayClick}
            >
                <FontAwesomeIcon icon={faRepeat} size="lg" />
                <span>Start Over</span>
            </button>

        </div>

    )

}



export default AudioPlayer;