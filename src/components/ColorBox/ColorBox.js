import React from 'react';

const ColorBox = ({ color }) => {
  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        margin: '20px auto',
        backgroundColor: color,
        border: '2px solid #000',
        borderRadius: '10px',
        transition: 'background-color 0.5s ease',
      }}
    ></div>
  );
};

export default ColorBox;
