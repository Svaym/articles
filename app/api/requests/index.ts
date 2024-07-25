import { ArticlesResponse } from '@/app/interfaces/interface';
import { AxiosRequestConfig } from 'axios';
import { api } from '../instance';

export interface GetArticlesConfig extends AxiosRequestConfig {
  config?: AxiosRequestConfig;
}

export const getArticles = async (requestConfig?: GetArticlesConfig) => {
  const response = await api.get<ArticlesResponse[]>('', requestConfig);
  return response.data;
};
