import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { useAppSelector } from '@/app/hooks/useAppSelector';
import { addArticleToFavorites } from '@/app/store/features/listOfArticles';
import React from 'react';
import Button from '../../atoms/Button/Button';
import Container from '../../atoms/Container/Container';
import Description from '../../atoms/Description/Description';
import Title from '../../atoms/Title/Title';

export default function CurrentArticle() {
  const dispatch = useAppDispatch();
  const article = useAppSelector(
    (state) => state.currentArticleInfo.currentArticle,
  );

  function handleAddToFavorites() {
    if (article) {
      dispatch(addArticleToFavorites(article));
    } else {
      console.error('Статья не найдена!');
    }
  }

  return (
    <section>
      <Container>
        <Title>{article?.title}</Title>
        <Description>{article?.body}</Description>
        <Button onClick={handleAddToFavorites} mx="mx-auto block mt-5">
          Добавить в корзину
        </Button>
      </Container>
    </section>
  );
}
