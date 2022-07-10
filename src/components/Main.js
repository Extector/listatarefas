import React, { Component } from 'react';
import Form from './Form';
import TaskList from './TaskList';

import './Main.css';

export default class Main extends Component {
  state = {
    task: '',
    tasks: [],
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return;
    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;
    if (tasks === prevState.tasks) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { task } = this.state;
    const { tasks, index } = this.state;

    task = task.trim();

    if (!task) return;
    if (tasks.indexOf(task) !== -1) return;

    const newTasks = [...tasks];

    if (index === -1) {
      this.setState({
        tasks: [...newTasks, task],
        task: '',
      });
    } else {
      newTasks[index] = task;
      this.setState({
        tasks: [...newTasks],
        index: -1,
      });
    }
  };

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    this.setState({ tasks: [...newTasks] });
  };

  handleEdit = (e, index) => {
    const { tasks } = this.state;
    this.setState({
      index,
      task: tasks[index],
    });
  };

  render() {
    const { task, tasks } = this.state;
    return (
      <div className="main">
        <h1>Task List</h1>

        <Form
          task={task}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <TaskList
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
