'use client';

import CurrentArticle from '@/app/components/molecules/CurrentArticle/CurrentArticle';
import Header from '@/app/components/organisms/Header/Header';
import React from 'react';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <CurrentArticle />
      </main>
    </>
  );
}
