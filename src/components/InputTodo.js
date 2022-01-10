import { useState } from 'react';

const InputTodo = () => {
  const [inputVal, setInputVal] = useState('');

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <form>
      <input type="text" placeholder="Add Todo..." value={inputVal} onChange={handleChange} />
      <button type="button">Submit</button>
    </form>
  );
};

export default InputTodo;
