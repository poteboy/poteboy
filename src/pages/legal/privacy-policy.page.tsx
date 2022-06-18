import { Divider, Heading, VStack, Text } from '@chakra-ui/react';
import { Footer, Header, ContentContainer, Spacer, Seo } from '@src/components';
import { useCategory } from '@src/hooks';
import { colors } from '@src/styles';
import type { NextPage } from 'next';
import React, { FC, memo } from 'react';
import { useEffect } from 'react';

const PrivacyPolicy: NextPage = () => {
  const { categories } = useCategory();

  return (
    <>
      <Seo title='Privacy Policy' description='' />

      <VStack bg={colors.BackGround}>
        <Header />
        <Spacer size={32} />
        <ContentContainer>
          <Heading as='h1' variant='title' textAlign='center'>
            プライバシーポリシー
          </Heading>
          <Spacer size={16} />
          <Divider />
          <Spacer size={16} />
          <Text>
            本サービスは、以下のプライバシーポリシーを定め、個人情報保護法を遵守すると共に、適切なプライバシー情報の保護に努めます
          </Text>
          <Spacer size={32} />
          <Heading as='h2' variant='subTitle'>
            第1条（プライバシー情報の定義）
          </Heading>
          <Spacer size={16} />
          <Text>
            プライバシー情報のうち「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、連絡先その他の記述等により特定の個人を識別できる情報を指します。
            プライバシー情報のうち「履歴情報および特性情報」とは、上記に定める「個人情報」以外のものを指し、ご利用いただいたサービスやご覧になったページ、広告の履歴、登録ユーザーが検索された検索キーワード、ご利用日時、ご利用の方法、ご利用環境、登録ユーザーのIPアドレス、Cookie、端末の個体識別情報などを指します。
          </Text>
          <Spacer size={32} />
          <Heading as='h2' variant='subTitle'>
            第2条（プライバシー情報の収集方法）
          </Heading>
          <Spacer size={16} />
          <Text>
            本サービスは、アカウントの有効性の確認やアカウントの保護のため、登録ユーザーが利用登録をする際にメールアドレスなどの個人情報をお尋ねすることがあります。また、登録ユーザーと提携先（情報提供元、広告主、広告配信先などを含みます）などとの間でなされた登録ユーザーの個人情報を含む取引記録や、決済に関する情報を本サービスの提携先などから収集することがあります。
            本サービスは、利便性の向上のため、登録ユーザーについて、利用したサービスやソフトウエア、閲覧したページや広告の履歴、検索した検索キーワード、利用日時、利用方法、利用環境（携帯端末を通じてご利用の場合の当該端末の通信状態、利用に際しての各種設定情報なども含みます）、IPアドレス、Cookie、ローカルストレージなどの履歴情報および特性情報を、登録ユーザーが本サービスや提携先のサービスを利用し、またはページを閲覧する際に収集します。
          </Text>
        </ContentContainer>
        <Spacer size={64} />
      </VStack>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
