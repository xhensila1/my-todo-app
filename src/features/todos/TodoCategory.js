import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoCategory() {
  const todos = useSelector(state => state.todos.todos);
  const categories = [...new Set(todos.map(todo => todo.category))]; // Unique categories

  return (
    <div>
      {categories.map(category => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {todos.filter(todo => todo.category === category).map(filteredTodo => (
              <TodoItem key={filteredTodo.id} todo={filteredTodo} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TodoCategory;
