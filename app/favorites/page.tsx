'use client';

import React from 'react';
import ListOfArticles from '../components/molecules/ListOfArticles/ListOfArticles';
import Header from '../components/organisms/Header/Header';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ListOfArticles />
      </main>
    </>
  );
}
