import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

function TodoList() {
  const todos = useSelector(state => state.todos.todos);
  const sortedTodos = todos.slice().sort((a, b) => a.completed - b.completed);

  return (
    <div>
      <AddTodoForm />
      <ul>
        {sortedTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
