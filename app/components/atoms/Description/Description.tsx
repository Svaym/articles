import { TextProps } from '@/app/interfaces/interface';
import React from 'react';

export default function Description({ children }: TextProps) {
  return <p>{children}</p>;
}
