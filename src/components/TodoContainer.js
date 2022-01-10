/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import TodoList from './TodosList';
import InputTodo from './InputTodo';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuid(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuid(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuid(),
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

  addTodo = (title) => {
    this.setState((prevState) => {
      const newTodo = {
        id: uuid(),
        title,
        completed: false,
      };

      return {
        todos: [...prevState.todos, newTodo],
      };
    });
  }

  render() {
	  const { todos } = this.state;
	  return (
  <div>
    <Header />
    <InputTodo handleSubmitProps={this.addTodo} />
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
