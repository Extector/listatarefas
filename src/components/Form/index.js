import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './style.css';

export default function Main({ handleSubmit, handleChange, task }) {
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={task} id="taskInput" />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Main.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  task: PropTypes.string,
};
