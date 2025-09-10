// StudentCard.js
import React, { useState } from 'react';

export default function StudentCard({ name, age, className }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(prev => !prev);

  return (
    <div className="pricing-card"> {/* dùng class cũ để giữ CSS */}
      <div className="plan-name">{name}</div>

      {showDetails && (
        <div className="plan-price" style={{fontSize: '20px'}}>
          Tuổi: {age}<br/>Lớp: {className}
        </div>
      )}

      <button className="cta-button" onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
}
