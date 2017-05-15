import React, { PropTypes } from 'react';

const Todo = ({ completed, text }) => (
  <li style={{textDecoration: completed ? 'line-through' : 'none'}}>
    {text}
  </li>
); 

Todo.propTypes = {
    text: PropTypes.string.isRequied,
    text: PropTypes.string.isRequied
};

export default Todo;
