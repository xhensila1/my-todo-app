import React from 'react';
import './App.css';
import TodosByCategory from './features/todos/TodoCategory';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Xheni's ToDo List</h1>
        <TodosByCategory />
      </header>
    </div>
  );
}

export default App;
