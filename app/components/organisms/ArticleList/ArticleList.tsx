'use client';

import { getArticles } from '@/app/api/requests';
import { ArticlesResponse } from '@/app/interfaces/interface';
import React, { useEffect, useState } from 'react';

export default function ArticleList() {
  const [articles, setArticles] = useState<ArticlesResponse[]>([]);

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
    <section>
      {articles.map((article, idx) => (
        <div key={idx}>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </div>
      ))}
    </section>
  );
}
