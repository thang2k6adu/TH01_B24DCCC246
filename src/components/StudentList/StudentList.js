// StudentList.js (Component cha)
import React from 'react';
import StudentCard from './StudentCard';

const StudentList = () => {
  const students = [
    { name: 'Nguyễn Văn A', age: 20, className: 'CNTT1' },
    { name: 'Trần Thị B', age: 21, className: 'CNTT2' },
    { name: 'Lê Văn C', age: 19, className: 'CNTT3' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Danh sách sinh viên</h1>
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          age={student.age}
          className={student.className}
        />
      ))}
    </div>
  );
};

export default StudentList;
