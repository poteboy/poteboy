import type { NextPage } from 'next';
import React from 'react';
import { Divider, Heading, HStack, VStack, Text } from '@chakra-ui/react';
import {
  Footer,
  Header,
  ContentContainer,
  Spacer,
  ValidationInput,
} from '@src/components';
import { useCategory } from '@src/hooks';
import { colors } from '@src/styles';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Inquery: NextPage = () => {
  const { categories } = useCategory();
  const { control } = useForm<InqueryField>({
    mode: 'onChange',
    resolver: yupResolver(inquerySchema),
  });

  return (
    <>
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
          <HStack justifyContent="flex-start" gap="12px" minW="60%">
            <Text>お名前</Text>
            <ValidationInput control={control} name="name" />
          </HStack>
          <Text>
            お名前お名前お名前お名前お名前お名前お名前お名前お名前お名前お名前お名前お名前お名前
          </Text>
        </ContentContainer>
      </VStack>
      <Footer />
    </>
  );
};

export default Inquery;

type InqueryField = {
  name: string;
  email: string;
};

const inquerySchema = yup.object().shape({
  name: yup.string().trim().required('この項目は必須です'),
  email: yup
    .string()
    .required('この項目は必須です')
    .email('メールアドレスの形式が正しくありません'),
});
