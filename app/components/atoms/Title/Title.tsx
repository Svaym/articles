import { TextProps } from '@/app/interfaces/interface';
import React from 'react';

export default function Title({ children }: TextProps) {
  return (
    <h2 className="text-lg font-semibold line-clamp-1 text-ellipsis">
      {children}
    </h2>
  );
}
