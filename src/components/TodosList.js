import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.Object).isRequired,
};
export default TodosList;
