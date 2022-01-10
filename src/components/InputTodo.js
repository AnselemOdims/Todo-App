import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

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
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" className="input-text" placeholder="Add Todo..." value={inputVal} onChange={handleChange} />
      <button type="submit" className="input-submit">
        <FaPlusCircle color="darkcyan" size="20px" className="submit-icon" />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  handleSubmitProps: PropTypes.func.isRequired,
};

export default InputTodo;
