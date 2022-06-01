import type { NextPage } from 'next';
import React from 'react';
import {
  Divider,
  Heading,
  HStack,
  VStack,
  Text,
  Button,
  useToast,
} from '@chakra-ui/react';
import {
  Footer,
  Header,
  ContentContainer,
  Spacer,
  ValidationInput,
} from '@src/components';
import { useCategory } from '@src/hooks';
import { colors, MAX_MOBILE_WIDTH } from '@src/styles';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';

const Inquery: NextPage = () => {
  const toast = useToast();
  const { categories } = useCategory();
  const { control, getValues, formState } = useForm<InqueryField>({
    mode: 'onChange',
    resolver: yupResolver(inquerySchema),
  });

  const onSubmit = () => {
    const values = getValues();
    toast({
      title: 'エラーが発生しました',
      description: 'この機能はまだ実装されていません。ごめんね',
      status: 'error',
      duration: 2000,
    });
  };

  return (
    <>
      <Head>
        <title>ケンコウイチバンへの問い合わせ</title>
        <meta name="og:title" content="ケンコウイチバンへの問い合わせ" />
        <meta
          name="description"
          content="ケンコウイチバンについて何かご不明点・お問合せがある場合はこちらのフォームからご意見を募集しています。"
        />
      </Head>
      <Header categories={categories} />
      <VStack minH="80vh" bg={colors.BackGround}>
        <Spacer size={32} />
        <ContentContainer>
          <Heading as="h1" variant="title" textAlign="center">
            お問い合せ
          </Heading>
          <Spacer size={16} />
          <Divider />
          <Spacer size={16} />
          <VStack
            justifyContent="flex-start"
            gap="4px"
            alignItems="flex-start"
            w={{ base: '100%', md: 'auto', xl: '440px' }}
          >
            <Text>お名前</Text>
            <ValidationInput
              control={control}
              name="name"
              placeholder="田中 太郎"
              minW={MAX_MOBILE_WIDTH * 0.5}
            />
            <Spacer size={8} />
            <Text>メールアドレス</Text>
            <ValidationInput
              control={control}
              name="email"
              placeholder="tanaka.taro@gmail.com"
              minW={MAX_MOBILE_WIDTH * 0.5}
            />
            <Spacer size={8} />
            <Text>お問合せ内容</Text>
            <ValidationInput
              control={control}
              name="content"
              placeholder="特になし"
              minW={MAX_MOBILE_WIDTH * 0.5}
              height="100px"
              as="textarea"
            />
            <Spacer size={24} />
            <Button
              disabled={!formState.isValid}
              alignSelf="center"
              onClick={onSubmit}
            >
              この内容で送信する
            </Button>
          </VStack>
        </ContentContainer>
        <Spacer size={64} />
      </VStack>
      <Footer />
    </>
  );
};

export default Inquery;

type InqueryField = {
  name: string;
  email: string;
  content: string;
};

const inquerySchema = yup.object().shape({
  name: yup.string().trim().required('この項目は必須です'),
  email: yup
    .string()
    .email('メールアドレスの形式が正しくありません')
    .required('この項目は必須です'),
  content: yup.string().trim().required('この項目は必須です'),
});
