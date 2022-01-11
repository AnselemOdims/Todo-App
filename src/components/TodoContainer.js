/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import TodoList from './TodosList';
import InputTodo from './InputTodo';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleChange = (idx) => {
	  setTodos((prevState) => prevState.map((todo) => {
	      if (todo.id === idx) {
	        return {
	          ...todo,
	          completed: !todo.completed,
	        };
	      }
	      return todo;
	    }));
  };

  const handleDelete = (id) => setTodos([...todos.filter((todo) => todo.id !== id)]);

  const addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (title, id) => {
    setTodos((prevState) => (
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title,
          };
        }
        return todo;
      })
    ));
  };

	  return (
  <div className="container">
    <div className="inner">
      <InputTodo handleSubmitProps={addTodo} />
      {todos.length !== 0 ? (
        <TodoList
          todos={todos}
          handleChangeProps={handleChange}
          handleDeleteProps={handleDelete}
          handleEditProps={editTodo}
        />
      ) : <h3>No todos added yet</h3>}
    </div>
  </div>
	  );
};

export default TodoContainer;
