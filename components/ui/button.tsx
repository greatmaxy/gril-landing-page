import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: string;
}

export const Button = ({ children, className, size = 'md' }: ButtonProps) => {
  const sizes = {
    lg: 'py-3 px-6 text-lg',
    md: 'py-2 px-4 text-md',
    sm: 'py-1 px-3 text-sm'
  };

  return (
    <button className={`rounded ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
};
