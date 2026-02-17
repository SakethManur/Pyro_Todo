import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:8080/api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', description: '' });
  
  // --- NEW: Dark Mode State ---
  const [isDarkMode, setIsDarkMode] = useState(false);

  // --- NEW: Apply dark mode class to the <body> tag ---
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.title.trim()) return; 

    try {
      await axios.post(API_URL, newTodo);
      setNewTodo({ title: '', description: '' }); 
      fetchTodos(); 
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleToggleComplete = async (todo) => {
    try {
      await axios.put(`${API_URL}/${todo.id}`, { ...todo, completed: !todo.completed });
      fetchTodos();
    } catch (error) {
      console.error("Error toggling completion:", error);
    }
  };

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditForm({ title: todo.title, description: todo.description, completed: todo.completed });
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`${API_URL}/${id}`, editForm);
      setEditingId(null); 
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <>
      {/* NEW: The Theme Toggle Button placed outside the main container */}
      <button 
        className="theme-toggle" 
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className="app-container">
        <h1 className="app-title">Todo Tasks</h1>
        
        {/* Add Todo Form */}
        <form onSubmit={handleAddTodo} className="todo-form">
          <input 
            type="text" 
            placeholder="What needs to be done?" 
            value={newTodo.title}
            onChange={(e) => setNewTodo({...newTodo, title: e.target.value})}
            required
            className="input-field"
          />
          <input 
            type="text" 
            placeholder="Details (Optional)" 
            value={newTodo.description}
            onChange={(e) => setNewTodo({...newTodo, description: e.target.value})}
            className="input-field"
          />
          <button type="submit" className="btn-primary">Add Task</button>
        </form>

        {/* Todo List */}
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              
              {editingId === todo.id ? (
                <div className="edit-mode">
                  <input 
                    value={editForm.title} 
                    onChange={(e) => setEditForm({...editForm, title: e.target.value})} 
                    className="input-field"
                  />
                  <input 
                    value={editForm.description} 
                    onChange={(e) => setEditForm({...editForm, description: e.target.value})} 
                    className="input-field"
                  />
                  <div className="btn-group">
                    <button onClick={() => handleUpdate(todo.id)} className="btn-primary">Save Changes</button>
                    <button onClick={() => setEditingId(null)} className="btn-action btn-edit">Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="todo-content">
                    <input 
                      type="checkbox" 
                      checked={todo.completed}
                      onChange={() => handleToggleComplete(todo)}
                      className="checkbox"
                    />
                    <div className="todo-text">
                      <span className={`todo-title ${todo.completed ? 'text-completed' : ''}`}>
                        {todo.title}
                      </span>
                      {todo.description && (
                        <span className={`todo-desc ${todo.completed ? 'text-completed' : ''}`}>
                          {todo.description}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="btn-group">
                    <button onClick={() => startEdit(todo)} className="btn-action btn-edit">Edit</button>
                    <button onClick={() => handleDelete(todo.id)} className="btn-action btn-delete">Delete</button>
                  </div>
                </>
              )}
              
            </li>
          ))}
          {todos.length === 0 && <p className="empty-state">No tasks pending. You're all caught up!</p>}
        </ul>
      </div>
    </>
  );
}

export default App;