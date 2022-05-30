import { Header } from '@src/components';
import { useCategory } from '@src/hooks';
import type { NextPage } from 'next';
import React, { FC, memo } from 'react';
import { useEffect } from 'react';

const PrivacyPolicy: NextPage = () => {
  const { categories } = useCategory();

  return (
    <>
      <Header categories={categories} />
    </>
  );
};

export default PrivacyPolicy;
