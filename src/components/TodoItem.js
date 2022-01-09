import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo, handleChange, handleDelete } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChange(todo.id)}
      />
      {' '}
      {todo.title}
      <button type="button" onClick={() => handleDelete(todo.id)}>Delete</button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default TodoItem;
