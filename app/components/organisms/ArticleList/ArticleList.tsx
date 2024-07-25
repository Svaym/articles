'use client';

import { getArticles } from '@/app/api/requests';
import { ArticlesResponse } from '@/app/interfaces/interface';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from '../../atoms/Button/Button';
import Container from '../../atoms/Container/Container';
import Description from '../../atoms/Description/Description';
import Title from '../../atoms/Title/Title';

export default function ArticleList() {
  const [articles, setArticles] = useState<ArticlesResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesData = await getArticles();
        setArticles(articlesData);
      } catch (error) {
        console.error('Ошибка при загрузке товаров:', error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <section className='pb-2'>
      <Container>
        <div className="grid grid-cols-3 gap-2 mt-5">
          {/* {articles.map((article, idx) => (
            <div key={idx} className='p-2 rounded-md border-2 border-gray-500'>
              <Title>{article.title}</Title>
              <Description>{article.body}</Description>
              <Link href={`/article/${article.title}`}>
                <Button mx='block mx-auto'>
                  Подробнее
                </Button>
              </Link>
            </div>
          ))} */}
          {currentItems.map((article, idx) => (
            <div key={idx} className="p-2 rounded-md border-2 border-gray-500">
              <Title>{article.title}</Title>
              <Description>{article.body}</Description>
              <Link href={`/article/${article.title}`}>
                <Button mx="block mx-auto mt-3">Подробнее</Button>
              </Link>
            </div>
          ))}
        </div>
        <div className='flex items-center gap-x-1 justify-center mt-5'>
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index} className='w-8 h-8 text-white rounded-sm bg-gray-500 transition-colors duration-300 ease-linear hover:bg-gray-700' onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}

