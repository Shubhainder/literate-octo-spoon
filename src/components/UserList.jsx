import React from 'react';
import { CustomButton } from './ui/CustomButton';

export const UserList = ({ users, onEdit, onDelete }) => {
  if (users.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 text-center text-gray-500 border border-gray-200">
        No users registered yet.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 transform hover:shadow-xl">
      <h2 className="text-2xl font-semibold text-gray-800 p-6 border-b border-gray-100 text-center">
        Registered Users ({users.length})
      </h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Date of Birth
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map(user => (
              <tr key={user.id} className="hover:bg-gray-50 transition-all w-full">
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {new Date(user.dateOfBirth).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center space-x-2">
                  <CustomButton
                    onClick={() => onEdit(user)}
                    className="bg-blue-500 text-white font-medium py-1 px-3 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition-all duration-200"
                  >
                    Edit
                  </CustomButton>
                  <CustomButton
                    onClick={() => onDelete(user.id)}
                    className="bg-red-500 text-white font-medium py-1 px-3 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-300 transition-all duration-200"
                  >
                    Delete
                  </CustomButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
