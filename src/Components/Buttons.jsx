import React from 'react';

function Buttons({ text, onClick }) {
  return (
    <button
      onClick={onClick} 
      className="bg-purple-600 text-white py-2 px-4 rounded-md"
    >
      {text}
    </button>
  );
}

export default Buttons;
