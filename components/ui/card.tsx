import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-all">
      {children}
    </div>
  );
};

export const CardContent = ({ children }: CardProps) => {
  return <div className="p-4">{children}</div>;
};
