import { ReactNode } from 'react';

export interface TextProps {
  children: ReactNode;
}
export interface ArticlesResponse {
  id: number;
  title: string;
  body: string;
}
