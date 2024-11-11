// src/components/ui/CustomInput.tsx
import React from 'react';

 

export const CustomInput  = ({ label, className, ...props }) => (
  <div className="space-y-1">
    {label && <label className="block text-sm font-medium text-gray-600">{label}</label>}
    <input
      className={`w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-300 transition-all duration-300 ${className}`}
      {...props}
    />
  </div>
);
