import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { useAppSelector } from '@/app/hooks/useAppSelector';
import { removeArticleFromFavorites } from '@/app/store/features/listOfArticles';
import { Delete } from 'lucide-react';
import React from 'react';
import Container from '../../atoms/Container/Container';

export default function ListOfArticles() {
  const dispatch = useAppDispatch();
  const favoritesArticles = useAppSelector(
    (state) => state.articlesInfo.articles,
  );
  return (
    <section className="">
      <Container>
        <div className="grid grid-cols-4 gap-2 md:grid-cols-3 sm:grid-cols-2 xxs:grid-cols-1">
          {favoritesArticles.map((favoritesArticle, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border-2 border-gray-400 rounded-md p-2"
            >
              <h3 className="line-clamp-1 font-semibold w-2/3">
                {favoritesArticle.title}
              </h3>
              <Delete
                onClick={() =>
                  dispatch(removeArticleFromFavorites(favoritesArticle.id))
                }
                className="cursor-pointer transition-all duration-300 ease-linear hover:stroke-red-400"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
