// TimeDisplay.js (Component con)
import React from 'react';

const TimeDisplay = ({ time }) => {
  // Format giờ: 08:46:45 AM
  const formattedTime = time.toLocaleTimeString();

  return (
    <h1>{formattedTime}</h1>
  );
};

export default TimeDisplay;