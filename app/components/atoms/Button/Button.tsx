import React, { ReactNode } from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
  mx?: string;
  children: ReactNode;
  onClick?: () => void;
}
export default function Button({ mx, children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${mx} px-3 py-2 rounded-md transition-colors duration-300 ease-linear bg-gray-500 text-white font-medium hover:bg-gray-700`}
    >
      {children}
    </button>
  );
}
