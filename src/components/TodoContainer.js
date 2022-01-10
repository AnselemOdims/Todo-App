/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodosList';
import InputTodo from './InputTodo';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

	handleChange = (idx) => {
	  this.setState((prevState) => ({
	    todos: prevState.todos.map((todo) => {
	      if (todo.id === idx) {
	        return {
	          ...todo,
	          completed: !todo.completed,
	        };
	      }
	      return todo;
	    }),
	  }));
	};

	handleDelete = (id) => {
	  this.setState((prevState) => ({
	    todos: prevState.todos.filter((todo) => todo.id !== id),
	  }));
	};

	render() {
	  const { todos } = this.state;
	  return (
  <div>
    <Header />
    <InputTodo />
    <TodoList
      todos={todos}
      handleChangeProps={this.handleChange}
      handleDeleteProps={this.handleDelete}
    />
  </div>
	  );
	}
}

export default TodoContainer;
