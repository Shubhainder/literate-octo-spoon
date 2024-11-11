import React, { useState, useEffect } from 'react';
import { UserList } from './components/UserList';
import { UserForm } from './components/UserForm';
// import { Alert } from '@/components/ui/alert';

const API_URL = 'http://localhost:3001/users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const [loading, setLoading] = useState(false);

  
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      showAlert('Failed to fetch users', 'error');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const createUser = async (userData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      setUsers([...users, data]);
      showAlert('User created successfully', 'success');
    } catch (error) {
      showAlert('Failed to create user', 'error');
    }
  };

  const updateUser = async (id, userData) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      setUsers(users.map(user => user.id === id ? data : user));
      setEditingUser(null);
      showAlert('User updated successfully', 'success');
    } catch (error) {
      showAlert('Failed to update user', 'error');
    }
  };

  const deleteUser = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      setUsers(users.filter(user => user.id !== id));
      showAlert('User deleted successfully', 'success');
    } catch (error) {
      showAlert('Failed to delete user', 'error');
    }
  };

  const showAlert = (message, type) => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: '', type: '' }), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          User Registration System
        </h1>
        
        {alert.show && (
          <div className={`mb-4 ${alert.type === 'error' ? 'bg-red-100' : 'bg-green-100'}`}>
            {alert.message}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <UserForm
            onSubmit={editingUser ? updateUser : createUser}
            initialData={editingUser}
            isEditing={!!editingUser}
          />
        </div>

        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <UserList
            users={users}
            onEdit={setEditingUser}
            onDelete={deleteUser}
          />
        )}
      </div>
    </div>
  );
};

export default App;