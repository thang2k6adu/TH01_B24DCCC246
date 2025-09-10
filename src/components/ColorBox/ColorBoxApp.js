// ColorBoxApp.js (Component cha)
import React, { useState } from 'react';
import ColorBox from './ColorBox';

const ColorBoxApp = () => {
  const colors = ['red', 'green', 'blue', 'yellow']; // danh sách màu
  const [color, setColor] = useState(colors[0]); // màu hiện tại

  return (
    <section className="pricing" id="pricing">

    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Ứng dụng đổi màu nền</h1>
      <ColorBox color={color} /> {/* Truyền màu xuống component con */}
      
      <div style={{ marginTop: '20px' }}>
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            style={{
              padding: '10px 20px',
              marginRight: '10px',
              backgroundColor: c,
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ColorBoxApp;
