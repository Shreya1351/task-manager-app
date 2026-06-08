import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTasks, createTask, updateTask, deleteTask, toggleTask } from '../services/api';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  // Add these state variables
const [searchTerm, setSearchTerm] = useState('');
const [filterStatus, setFilterStatus] = useState('all');
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      loadTasks();
    }
  }, [navigate]);

  const loadTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (err) {
      console.error('Failed to load tasks', err);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      await createTask({ title, description });
      setTitle('');
      setDescription('');
      loadTasks();
    } catch (err) {
      console.error('Failed to create task', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await deleteTask(id);
        loadTasks();
      } catch (err) {
        console.error('Failed to delete task', err);
      }
    }
  };

  const handleToggle = async (id) => {
    try {
      await toggleTask(id);
      loadTasks();
    } catch (err) {
      console.error('Failed to toggle task', err);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await updateTask(id, { title: editTitle, description: editDescription });
      setEditingId(null);
      loadTasks();
    } catch (err) {
      console.error('Failed to update task', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };
// Filter tasks
const filteredTasks = tasks.filter(task => {
  const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesFilter = filterStatus === 'all' || task.status === filterStatus;
  return matchesSearch && matchesFilter;
});
  return (
    <div className="dashboard">
      <div className="header">
        <h1>Task Manager</h1>
        <div>
          <span>Welcome, {user.name}!</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>

      <div className="add-task-form">
        <h3>Add New Task</h3>
        <form onSubmit={handleCreate}>
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>

      <div className="tasks-list">
        <h3>My Tasks ({filteredTasks.length})</h3>
        {/* Search and Filter Bar */}
<div className="search-filter-bar">
  <input
    type="text"
    placeholder="🔍 Search tasks..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="search-input"
  />
  <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="filter-select">
    <option value="all">All Tasks</option>
    <option value="pending">Pending</option>
    <option value="completed">Completed</option>
  </select>
</div>
        {filteredTasks.length === 0 && <p>No tasks match your search.</p>}
        {filteredTasks.map((task) => (
          <div key={task._id} className={`task-card ${task.status}`}>
            {editingId === task._id ? (
              <div className="edit-form">
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="Title"
                />
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  placeholder="Description"
                />
                <button onClick={() => handleUpdate(task._id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            ) : (
              <div className="task-content">
                <div className="task-header">
                  <h3 style={{ textDecoration: task.status === 'completed' ? 'line-through' : 'none' }}>
                    {task.title}
                  </h3>
                  <div className="task-actions">
                    <button onClick={() => handleToggle(task._id)} className="toggle-btn">
                      {task.status === 'pending' ? '✓ Complete' : '↺ Undo'}
                    </button>
                    <button onClick={() => {
                      setEditingId(task._id);
                      setEditTitle(task.title);
                      setEditDescription(task.description || '');
                    }} className="edit-btn">Edit</button>
                    <button onClick={() => handleDelete(task._id)} className="delete-btn">Delete</button>
                  </div>
                </div>
                {task.description && <p>{task.description}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
