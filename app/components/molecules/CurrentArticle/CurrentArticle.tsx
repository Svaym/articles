import { useAppSelector } from '@/app/hooks/useAppSelector';
import React from 'react';
import Button from '../../atoms/Button/Button';
import Container from '../../atoms/Container/Container';
import Description from '../../atoms/Description/Description';
import Title from '../../atoms/Title/Title';

export default function CurrentArticle() {
  const article = useAppSelector(
    (state) => state.currentArticleInfo.currentArticle,
  );
  return (
    <section>
      <Container>
        <Title>{article?.title}</Title>
        <Description>{article?.body}</Description>
        <Button mx="mx-auto block mt-5">Добавить в корзину</Button>
      </Container>
    </section>
  );
}
