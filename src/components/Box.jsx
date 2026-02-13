import React from 'react';

const Box = ({ value, onClick, isLocked }) => {
  let bgClass = '';
  let textClass = 'text-black';

  if (isLocked) {
    bgClass = 'bg-red-500';
    textClass = 'text-white';
  } else if (value % 2 === 0) {
    bgClass = 'bg-[#e0e0e0]';
    textClass = 'text-black';
  } else {
    // Odd numbers: Navy Blue
    bgClass = 'bg-[#1a237e]';
    textClass = 'text-white';
  }

  return (
    <div
      onClick={isLocked ? undefined : onClick}
      className={`
        w-24 h-24 
        flex items-center justify-center 
        text-2xl font-bold 
        rounded-[4px] 
        shadow-[2px_2px_0px_black] 
        cursor-pointer 
        transition-all duration-200
        ${bgClass} 
        ${textClass}
        ${isLocked ? 'cursor-not-allowed opacity-90' : 'hover:scale-105'}
      `}
    >
      {value}
    </div>
  );
};

export default Box;
