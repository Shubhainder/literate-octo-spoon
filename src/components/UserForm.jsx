import React, { useState, useEffect } from 'react';
import { CustomButton } from './ui/CustomButton';
import { CustomInput } from './ui/CustomInput';

export const UserForm = ({ onSubmit, initialData, isEditing }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ name: '', email: '', dateOfBirth: '' });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      onSubmit(initialData.id, formData);
    } else {
      onSubmit(formData);
    }
    setFormData({ name: '', email: '', dateOfBirth: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-8 space-y-8 border border-gray-100 transition-all duration-300 transform hover:shadow-xl">
      <h2 className="text-3xl font-semibold text-gray-900 text-center mb-4">
        {isEditing ? 'Edit User' : 'Add New User'}
      </h2>

      <p className="text-gray-500 text-center mb-6">
        {isEditing ? 'Update the information below' : 'Fill out the form to add a new user'}
      </p>

      <CustomInput
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Enter full name"
        className="focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
      />

      <CustomInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Enter email address"
        className="focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
      />

      <CustomInput
        label="Date of Birth"
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        required
        className="focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
      />

      <CustomButton type="submit" className="py-3 w-full rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold tracking-wide transform hover:scale-105 transition-all duration-300">
        {isEditing ? 'Update User' : 'Add User'}
      </CustomButton>
    </form>
  );
};
