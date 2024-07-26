import { ArticlesResponse } from '@/app/interfaces/interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface currentArticleState {
  currentArticle: ArticlesResponse | null;
}

const initialState: currentArticleState = {
  currentArticle: null,
};

export const articleSlice = createSlice({
  name: 'currentArticleInfo',
  initialState,
  reducers: {
    getArticle: (state, action: PayloadAction<ArticlesResponse>) => {
      state.currentArticle = action.payload;
    },
  },
});

export const { getArticle } = articleSlice.actions;
export const selectIsSelectedCategory = (state: RootState) =>
  state.currentArticleInfo.currentArticle;
export default articleSlice.reducer;
