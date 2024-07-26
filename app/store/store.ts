import { configureStore } from '@reduxjs/toolkit';
import articleSlice from './features/articleSlice';
import listOfArticles from './features/listOfArticles';

export const store = configureStore({
  reducer: {
    currentArticleInfo: articleSlice,
    articlesInfo: listOfArticles,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
