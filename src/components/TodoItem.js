import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo } = props;
  return (
    <li>
      <input type="checkbox" />
      {' '}
      {todo.title}
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.Object).isRequired,
};
export default TodoItem;
