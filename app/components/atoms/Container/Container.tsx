import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-7xl mx-auto w-full px-7 lg:px-5 sm:px-3 xxs:px-1">
      {children}
    </div>
  );
}
