import React, { useState } from 'react';
import Story from './Story';
import AccessibilityButtons from './AccessibilityButtons';

function StudentWorkView() {

  const [showImages, setShowImages] = useState(true);

  function onShowImagesToggle() {
    setShowImages(!showImages);
  }

  return (
    <div className="min-h-screen bg-secondaryPurple text-textBrown">
      <div className="bg-primaryPurple">
        NAV
      </div>

      <div className="container mx-auto p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 max-w-7xl">
  
      {/* Story Content */}
      <div className="flex-1 bg-textGround p-4 rounded-lg shadow-md">
        <Story showImages={showImages} />
      </div>
  
    <AccessibilityButtons showImages={showImages} onShowImagesToggle={onShowImagesToggle}/>
  

</div>
    </div>
  );
}

export default StudentWorkView;