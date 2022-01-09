import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo, handleChange } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChange(todo.id)}
      />
      {' '}
      {todo.title}
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
};
export default TodoItem;
