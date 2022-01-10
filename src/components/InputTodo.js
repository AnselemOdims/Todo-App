import { useState } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [inputVal, setInputVal] = useState('');
  const [box, setBox] = useState(false);

  const handleChange = (e) => {
    setInputVal(e.target.value);
    setBox(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { handleSubmitProps } = props;
    if (inputVal.trim()) {
      handleSubmitProps(inputVal);
      setBox(false);
      setInputVal('');
    } else {
      setBox(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input type="text" className="input-text" placeholder="Add Todo..." value={inputVal} onChange={handleChange} />
        <button type="submit" className="input-submit">
          <FaPlusCircle color="darkcyan" size="20px" className="submit-icon" />
        </button>
      </form>
      {box ? (
        <Alert variant="danger">
          Todo can not be empty!
        </Alert>
      ) : ''}
    </>
  );
};

InputTodo.propTypes = {
  handleSubmitProps: PropTypes.func.isRequired,
};

export default InputTodo;
