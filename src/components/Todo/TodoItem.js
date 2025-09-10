// TodoItem.js (Component con)
import React from 'react';

const TodoItem = ({ task }) => {
  return (
    <li style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '5px', borderRadius: '5px' }}>
      {task}
    </li>
  );
};

export default TodoItem;