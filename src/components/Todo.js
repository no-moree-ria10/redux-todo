import React, { PropTypes } from 'react';


const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{textDecoration: completed ? 'line-through' : 'none'}}
  >
    {text}
  </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequied,
    text: PropTypes.string.isRequied,
    completed: PropTypes.bool.isRequied
};

export default Todo;
