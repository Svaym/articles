import { TextProps } from '@/app/interfaces/interface';
import React from 'react';

export default function Title({ children }: TextProps) {
  return <h2>{children}</h2>;
}
