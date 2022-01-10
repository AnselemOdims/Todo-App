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
      todos: [],
    };
  }

  async componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    this.setState({ todos });
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
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

  editTodo = (title, id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title,
          };
        }
        return todo;
      }),
    }));
  }

  render() {
	  const { todos } = this.state;
	  return (
  <div className="container">
    <div className="inner">
      <Header />
      <InputTodo handleSubmitProps={this.addTodo} />
      <TodoList
        todos={todos}
        handleChangeProps={this.handleChange}
        handleDeleteProps={this.handleDelete}
        handleEditProps={this.editTodo}
      />
    </div>
  </div>
	  );
  }
}

export default TodoContainer;
