// src/components/ui/CustomButton.tsx
import React from 'react';

 
export const CustomButton = ({ children, className, ...props }) => (
  <button
    className={` ${className}`}
    {...props}
  >
    {children}
  </button>
);
