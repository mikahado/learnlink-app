import React, { useState } from 'react';
import Story from './Story';
import AccessibilityButtons from './AccessibilityButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

function StudentWorkView() {

  const textSizeClass = ["text-base", "text-xl", "text-3xl", "text-5xl", "text-7xl"];
  const [showImages, setShowImages] = useState(true);
  const [textSize, setTextSize] = useState(textSizeClass[0]);
  const [showBionicReader, setShowBionicReader] = useState(false);

  function onShowImagesToggle() {
    setShowImages(!showImages);
  }
  
  function onTextSizeToggle() {
    setTextSize(textSizeClass[(textSizeClass.indexOf(textSize) + 1) % textSizeClass.length]);
  }

  function onBionicReaderToggle() {
    setShowBionicReader(!showBionicReader);
  }

  return (
    <div className="min-h-screen bg-secondaryPurple text-textBrown">

      {/* Top Nav */}
      <div className="bg-primaryPurple flex justify-between p-4">
        <button className="py-2 px-4 bg-textGround mx-8 rounded text-buttonTextGreen">Student Name</button>
        <button className="py-2 px-4 bg-textGround mx-8 rounded text-buttonTextGreen">
          <span>Help </span>
          <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
        </button>
        <button className="py-2 px-4 bg-textGround mx-8 rounded text-buttonTextGreen">Teacher Name</button>
      </div>


      <div className="container mx-auto p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 max-w-7xl">

        {/* Accessibility Buttons */}
        <AccessibilityButtons 
          showImages={showImages} 
          onShowImagesToggle={onShowImagesToggle} 
          onTextSizeToggle={onTextSizeToggle} 
          onBionicReaderToggle={onBionicReaderToggle}
        />

        {/* Story Content */}
        <div className="flex-1 bg-textGround p-4 rounded-lg shadow-md">
          <Story showImages={showImages} textSize={textSize} showBionicReader={showBionicReader} />
        </div>

      </div>

    </div>
  );
}

export default StudentWorkView;