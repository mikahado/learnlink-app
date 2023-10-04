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
      <div className="bg-white p-6 rounded shadow-lg z-10">
        <h1 className="text-xl font-bold mb-4">{activeStory?.title}</h1>
        <p>{moral}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MoralModal;
