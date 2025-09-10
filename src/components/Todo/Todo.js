// TodoApp.js (Component cha)
import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoApp = () => {
  const [task, setTask] = useState(''); // lưu giá trị input
  const [tasks, setTasks] = useState([]); // danh sách công việc

  const handleAddTask = () => {
    if (task.trim() === '') return; // không thêm nếu trống
    setTasks([...tasks, task]); // thêm công việc vào danh sách
    setTask(''); // reset input
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Danh sách công việc</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc..."
        style={{ padding: '5px', width: '200px' }}
      />
      <button onClick={handleAddTask} style={{ marginLeft: '10px', padding: '5px 10px' }}>Thêm</button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {tasks.map((t, index) => (
          <TodoItem key={index} task={t} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
