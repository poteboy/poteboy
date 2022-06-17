import type { NextPage } from 'next';
import React from 'react';
import { Divider, Heading, HStack, VStack, Text, Button, useToast } from '@chakra-ui/react';
import { Footer, Header, ContentContainer, Spacer, ValidationInput } from '@src/components';
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
      title: 'ERROR',
      description: 'Unexpected error has occured',
      status: 'error',
      duration: 2000,
    });
  };

  return (
    <>
      <Head>
        <title>ケンコウイチバンへの問い合わせ</title>
        <meta name='og:title' content='ケンコウイチバンへの問い合わせ' />
        <meta
          name='description'
          content='ケンコウイチバンについて何かご不明点・お問合せがある場合はこちらのフォームからご意見を募集しています。'
        />
      </Head>
      <VStack minH='80vh' bg={colors.BackGround}>
        <Header />
        <Spacer size={32} />
        <ContentContainer>
          <Heading as='h1' variant='title' textAlign='center'>
            Contact
          </Heading>
          <Spacer size={16} />
          <Divider />
          <Spacer size={16} />
          <VStack
            justifyContent='flex-start'
            gap='4px'
            alignItems='flex-start'
            w={{ base: '100%', md: 'auto', xl: '440px' }}
          >
            <Text variant='button1'>Name</Text>
            <ValidationInput
              control={control}
              name='name'
              placeholder='John Tanaka'
              minW={MAX_MOBILE_WIDTH * 0.5}
            />
            <Spacer size={8} />
            <Text variant='button1'>E-Mail</Text>
            <ValidationInput
              control={control}
              name='email'
              placeholder='tanaka.john@gmail.com'
              minW={MAX_MOBILE_WIDTH * 0.5}
            />
            <Spacer size={8} />
            <Text variant='button1'>Details of Inquery</Text>
            <ValidationInput
              control={control}
              name='content'
              placeholder='I love you and your content!'
              minW={MAX_MOBILE_WIDTH * 0.5}
              height='100px'
              as='textarea'
            />
            <Spacer size={24} />
            <Button disabled={!formState.isValid} alignSelf='center' onClick={onSubmit}>
              Submit
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
  name: yup.string().trim().required('This field is required'),
  email: yup.string().email('Incorrect email address format').required('This field is required'),
  content: yup.string().trim().required('This field is required'),
});
