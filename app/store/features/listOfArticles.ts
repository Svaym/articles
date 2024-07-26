import { ArticlesResponse } from '@/app/interfaces/interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface articlesState {
  articles: ArticlesResponse[];
}

const initialState: articlesState = {
  articles: [],
};

export const listOfArticles = createSlice({
  name: 'articlesInfo',
  initialState,
  reducers: {
    addArticleToFavorites: (state, action: PayloadAction<ArticlesResponse>) => {
      const uniqueArticles = state.articles.some(
        (article) => article.id === action.payload.id,
      );

      if (!uniqueArticles) {
        state.articles.push(action.payload);
      }
    },
    removeArticleFromFavorites: (state, action: PayloadAction<number>) => {
      state.articles = state.articles.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { addArticleToFavorites, removeArticleFromFavorites } =
  listOfArticles.actions;
export const selectIsSelectedCategory = (state: RootState) =>
  state.articlesInfo.articles;
export default listOfArticles.reducer;
