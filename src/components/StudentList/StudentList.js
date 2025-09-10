// StudentList.js
import React from 'react';
import StudentCard from './StudentCard';

const students = [
  { name: 'Alice Nguyen', age: 20, className: 'CS101' },
  { name: 'Bob Tran', age: 22, className: 'CS102' },
  { name: 'Charlie Le', age: 21, className: 'CS103' },
];

export default function StudentList() {
  return (
    <section className="pricing" id="students">
      <div className="pricing-header">
        <h2>Danh sách học sinh</h2>
        <p className="features-subtitle">Ấn show details để xem thêm thông tin</p>
      </div>
      <div className="pricing-cards">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            age={student.age}
            className={student.className}
          />
        ))}
      </div>
    </section>
  );
}
