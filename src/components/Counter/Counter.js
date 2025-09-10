// Counter.js (Component cha)
import React, { useState } from 'react';
import DisplayNumber from './DisplayNumber';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Ứng dụng Đếm số</h1>
      <DisplayNumber number={count} /> {/* Truyền số xuống component con */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleIncrement} style={{ marginRight: '10px' }}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;