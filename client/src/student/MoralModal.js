import React from 'react';

const MoralModal = ({ isOpen, onClose, moral, activeStory }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>

        {/* Modal content */}
        <div className="relative bg-textGround p-10 rounded-lg shadow-2xl transform transition-transform duration-300 scale-95 hover:scale-100 z-10 w-3/4 sm:w-1/2 font-Barlow">
            <button 
                className="absolute top-2 right-2 text-buttonTextGreen text-2xl mx-1" 
                onClick={onClose}
            >
                X
            </button>
            <div className="border rounded-lg p-4 text-xl">
            <h1 className="text-xl font-bold mb-4 text-center">{activeStory?.title}</h1>
            <p>{moral}</p>
            </div>
        </div>
    </div>
  );
};

export default MoralModal;
