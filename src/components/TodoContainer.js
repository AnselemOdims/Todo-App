import React, { Component } from 'react';
import Header from './Header';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Hello from Create React App</h1>
        <p>I am in a React Component!</p>
      </div>
    );
  }
}

export default TodoContainer;
