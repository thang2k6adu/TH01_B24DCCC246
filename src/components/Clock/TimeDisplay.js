import React from 'react';

const TimeDisplay = ({ time }) => {
  const formattedTime = time.toLocaleTimeString();

  return (
    <h1>{formattedTime}</h1>
  );
};

export default TimeDisplay;