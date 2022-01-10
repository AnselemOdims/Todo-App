import { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const [inputVal, setInputVal] = useState('');

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { handleSubmitProps } = props;
    if (inputVal.trim()) {
      handleSubmitProps(inputVal);
      setInputVal('');
    } else {
      alert('Todo can not be empty');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Todo..." value={inputVal} onChange={handleChange} />
      <button type="button">Submit</button>
    </form>
  );
};

InputTodo.propTypes = {
  handleSubmitProps: PropTypes.func.isRequired,
};

export default InputTodo;
