// StudentCard.js (Component con)
import React, { useState } from 'react';

const StudentCard = ({ name, age, className }) => {
  const [showDetails, setShowDetails] = useState(true); // trạng thái hiển thị chi tiết

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '15px',
      marginBottom: '10px',
      width: '250px'
    }}>
      <h3>{name}</h3>
      {showDetails && (
        <>
          <p>Tuổi: {age}</p>
          <p>Lớp: {className}</p>
        </>
      )}
      <button onClick={toggleDetails} style={{
        padding: '5px 10px',
        cursor: 'pointer',
        borderRadius: '5px'
      }}>
        {showDetails ? 'Ẩn chi tiết' : 'Hiện chi tiết'}
      </button>
    </div>
  );
};

export default StudentCard;
