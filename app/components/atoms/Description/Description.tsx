import { TextProps } from '@/app/interfaces/interface';
import React from 'react';

export default function Description({ children }: TextProps) {
  return <p className="mt-2 line-clamp-3 text-ellipsis">{children}</p>;
}
