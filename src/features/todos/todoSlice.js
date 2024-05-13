import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: 1, title: 'Learn a new technology', completed: false, priority: 'Medium', category: 'Education' },
    { id: 2, title: 'Finish the task', completed: true, priority: 'High', category: 'Education' },
    { id: 3, title: 'Go to the gym', completed: false, priority: 'High', category: 'Fitness' }
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift({ id: state.todos.length + 1, title: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(todo => todo.id === action.payload);
      if (todoIndex !== -1) {
        state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
        // Sort todos so completed ones move to the bottom
        state.todos.sort((a, b) => a.completed - b.completed);
      }
    },
    //extra feature, set priority for each of them, and separate them into categories
    setPriority: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.priority = action.payload.priority;
      }
    },
    setCategory: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.category = action.payload.category;
      }
    },
  },
});

export const { addTodo, toggleTodo, setPriority,setCategory } = todoSlice.actions;
export default todoSlice.reducer;
