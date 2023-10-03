import React, { useState } from 'react';
import Story from './Story';
import AccessibilityButtons from './AccessibilityButtons';
import AudioPlayer from './AudioPlayer';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function StudentWorkView() {

  const textSizeClass = ["text-base", "text-xl", "text-3xl", "text-5xl", "text-7xl"];
  const [showImages, setShowImages] = useState(true);
  const [textSize, setTextSize] = useState(textSizeClass[0]);
  const [showBionicReader, setShowBionicReader] = useState(false);
  const [showMoral, setShowMoral] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [audio, setAudio] = useState(null);
  const [error, setError] = useState("");

  function onSetAudioPlayer(aud) {
    setShowPlayer(!showPlayer);
    setAudio(aud);
  }
  
  function onShowImagesToggle() {
    setShowImages(!showImages);
  }
  
  function onTextSizeToggle() {
    setTextSize(textSizeClass[(textSizeClass.indexOf(textSize) + 1) % textSizeClass.length]);
  }

  function onBionicReaderToggle() {
    setShowBionicReader(!showBionicReader);
  }

  function onError(err) {
    setError(err);
  }

  return (
    <div className="min-h-screen bg-secondaryPurple text-textBrown">

      <NavBar />

      <div className="container mx-auto p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 max-w-7xl">

        {/* Accessibility Buttons */}
        <AccessibilityButtons 
          showImages={showImages} 
          onShowImagesToggle={onShowImagesToggle} 
          onTextSizeToggle={onTextSizeToggle} 
          onBionicReaderToggle={onBionicReaderToggle}
          onSetAudioPlayer={onSetAudioPlayer}
          showPlayer={showPlayer}
          onError={onError}
        />

        {/* Story Content */}
        <div className="flex-1 bg-textGround p-4 rounded-lg shadow-md">

          {/* Errors Container */}
          { error &&
            <div className="bg-errorRed text-white flex items-center justify-center rounded-lg py-4"> 
            {error}
            </div>
          }
          
          {/* Audio Player */}
          {showPlayer && <AudioPlayer audio={audio} />}

          <Story showImages={showImages} textSize={textSize} showBionicReader={showBionicReader} />

          {/* Moral Container -- MAKE MODAL POP UP?*/}
          {
            showMoral && "This is the moral."
          }

          {/* Story Buttons */}
          <div className="flex justify-between mx-auto p-4 w-full md:w-3/4 lg:w-1/2">
            <button className="py-4 px-6 bg-buttonTextGreen text-white rounded hover:bg-teal-600">
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />  Back
            </button>

            <button 
              onClick={() => setShowMoral(!showMoral)}
              className="py-4 px-6 bg-buttonTextGreen text-white rounded hover:bg-teal-600"
            >
               Moral Generator
            </button>

            <button className="py-4 px-6 bg-buttonTextGreen text-white rounded hover:bg-teal-600">
            Next <FontAwesomeIcon icon={faArrowRight} size="lg" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentWorkView;