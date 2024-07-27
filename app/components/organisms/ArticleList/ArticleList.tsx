'use client';

import { getArticles } from '@/app/api/requests';
import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { ArticlesResponse } from '@/app/interfaces/interface';
import { getArticle } from '@/app/store/features/articleSlice';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from '../../atoms/Button/Button';
import Container from '../../atoms/Container/Container';
import Description from '../../atoms/Description/Description';
import Spinner from '../../atoms/Spinner/Spinner';
import Title from '../../atoms/Title/Title';

export default function ArticleList() {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState<ArticlesResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const dispatch = useAppDispatch();
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchArticles = async () => {
      try {
        const articlesData = await getArticles();
        setArticles(articlesData);
        setIsLoading(false);
      } catch (error) {
        console.error('Ошибка при загрузке товаров:', error);
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <section className="pb-2">
      <Container>
        {isLoading &&
          <div className='h-screen flex items-center justify-center'>
            <Spinner />
          </div>}
        {articles && (
          <>
            <div className="grid grid-cols-3 gap-2 mt-5 sm:grid-cols-2 xxs:grid-cols-1">
              {currentItems.map((article, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-md border-2 border-gray-500"
                >
                  <Title>{article.title}</Title>
                  <Description>{article.body}</Description>
                  <Link href={`/article/${article.title}`}>
                    <Button
                      onClick={() => dispatch(getArticle(article))}
                      mx="block mx-auto mt-3"
                    >
                      Подробнее
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-x-1 justify-center mt-5">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={clsx('w-8 h-8 rounded-sm', {
                    'bg-gray-100 text-gray-500': currentPage === index + 1,
                    'bg-gray-500 text-white transition-colors duration-300 ease-linear hover:bg-gray-700':
                      currentPage !== index + 1,
                  })}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
