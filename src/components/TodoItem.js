/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FcCheckmark } from 'react-icons/fc';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [edit, setEdit] = useState(false);
  const {
    todo: { id, completed, title },
    handleChange,
    handleDelete,
    handleEditing,
  } = props;

  const editMode = {};
  const viewMode = {};

  if (edit) viewMode.display = 'none';
  else editMode.display = 'none';

  const handleDoubleClick = () => {
    setEdit(true);
  };

  const handleEdit = (e) => {
    handleEditing(e.target.value, id);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') setEdit(false);
  };

  useEffect(() => {
    document.querySelectorAll('.TodoItem_textInput__N9CPb').forEach((item) => {
      item.focus();
    });
  }, [edit]);

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleDoubleClick} style={viewMode}>
        {!completed ? (
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => handleChange(id)}
          />
        ) : (
          <FcCheckmark onClick={() => handleChange(id)} style={{ marginRight: '20px', color: 'darkcyan' }} />
        )}
        <span className={completed ? styles.completedStyle : styles.textColor}>{title}</span>
        <button type="button" onClick={() => handleDelete(id)}>
          <FaTrashAlt color="red" size="16px" />
        </button>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={handleEdit}
        onKeyDown={handleEnter}
        onBlur={(e) => {
				  handleEdit(e);
				  setEdit(false);
        }}
      />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEditing: PropTypes.func.isRequired,
};

export default TodoItem;
