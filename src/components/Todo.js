import React, { PropTypes } from 'react'

const Todo == ({ text }) => (
        <li>
        {text}
    </li>
)

Todo.propTypes = {
    text: PropTypes.string.isRequied
}

export default Todo
