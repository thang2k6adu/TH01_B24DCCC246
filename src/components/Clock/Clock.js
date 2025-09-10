// Clock.js (Component cha)
import React, { useState, useEffect } from 'react';
import TimeDisplay from './TimeDisplay';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup khi component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="about" id="about">
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Đồng hồ</h1>
      <TimeDisplay time={time} />
    </div>
    </section>

  );
};

export default Clock;
