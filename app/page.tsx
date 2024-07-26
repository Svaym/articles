'use client';

import ArticleList from './components/organisms/ArticleList/ArticleList';
import Header from './components/organisms/Header/Header';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ArticleList />
      </main>
    </>
  );
}
