import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, setPriority, setCategory } from './todoSlice';
import './ToDoItem.css';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li className={`todo-item ${todo.priority}`}>
      <span className={`todo-text ${todo.completed ? 'crossed-out' : ''}`}>
        {todo.title}
      </span>
      <select
        value={todo.priority}
        onChange={(e) => dispatch(setPriority({ id: todo.id, priority: e.target.value }))}
      >
        <option value="High" className='High'>High</option>
        <option value="Medium" className='Medium'>Medium</option>
        <option value="Low" className='Low'>Low</option>
      </select>
      <select
        value={todo.category}
        onChange={(e) => dispatch(setCategory({ id: todo.id, category: e.target.value }))}
      >
        <option value="Education">Education</option>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Fitness">Fitness</option>
      </select>
      <input
        type="checkbox"
        className='checkbox'
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
    </li>
  );
}

export default TodoItem;
