import { configureStore } from '@reduxjs/toolkit';
import articleSlice from './features/articleSlice';

export const store = configureStore({
  reducer: {
    currentArticleInfo: articleSlice,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
