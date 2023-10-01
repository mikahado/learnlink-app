import React, { useState } from 'react';
import Story from './Story';
import AccessibilityButtons from './AccessibilityButtons';

function StudentWorkView() {

  const textSizeClass = ["text-base", "text-xl", "text-3xl", "text-5xl", "text-7xl"];
  const [showImages, setShowImages] = useState(true);
  const [textSizeToggle, setTextSizeToggle] = useState(textSizeClass[0]);

  function onShowImagesToggle() {
    setShowImages(!showImages);
  }
  
  function onTextSizeToggle() {
    //let currentIndex = 0;

    setTextSizeToggle(textSizeClass[(textSizeClass.indexOf(textSizeToggle) + 1) % textSizeClass.length]);
  }

  return (
    <div className="min-h-screen bg-secondaryPurple text-textBrown">
      <div className="bg-primaryPurple">
        NAV
      </div>

      <div className="container mx-auto p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 max-w-7xl">
  
      {/* Story Content */}
      <div className="flex-1 bg-textGround p-4 rounded-lg shadow-md">
        <Story showImages={showImages} textSizeToggle={textSizeToggle} />
      </div>
  
    <AccessibilityButtons showImages={showImages} onShowImagesToggle={onShowImagesToggle} onTextSizeToggle={onTextSizeToggle} />
  

</div>
    </div>
  );
}

export default StudentWorkView;