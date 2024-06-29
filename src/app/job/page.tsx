import {
  Box,
  Heading,
  Spacer,
  VStack,
  Text,
  HStack,
  Flex,
} from "@kuma-ui/core";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お仕事依頼",
  description: "合同会社ぽてぽてランドへのお仕事依頼を受け付けています。",
  metadataBase: new URL("https://poteboy.dev/"),
};

export default function JobPage() {
  return (
    <Box>
      <Spacer size={40} />
      <Heading as="h1" fontSize={22} fontWeight={500}>
        お仕事依頼
      </Heading>
      <VStack marginBottom={52}>
        <Box as="section" mt={32}>
          <Heading
            as="h2"
            fontSize={18}
            fontWeight={500}
            borderBottom="1px solid #d6e3ed"
          >
            お仕事依頼について
          </Heading>
          <VStack padding="12px" gap={16}>
            <Text fontSize={14}>
              合同会社ぽてぽてランドでは、Webアプリケーション開発支援、コンサルティング、技術アドバイザリーなどのお仕事を受け付けています。
            </Text>
            <Text fontSize={14}>
              お仕事のご依頼やご相談は、以下のメールアドレスにお問い合わせください。
            </Text>
          </VStack>
        </Box>
        <Box as="section" mt={32}>
          <Heading
            as="h2"
            fontSize={18}
            fontWeight={500}
            borderBottom="1px solid #d6e3ed"
          >
            お問い合わせ先
          </Heading>
          <VStack as="dl" padding="12px" gap={16}>
            <HStack fontSize={14} gap={8}>
              <Text as="dt">会社名:</Text>
              <Text as="dd">合同会社ぽてぽてランド</Text>
            </HStack>
            <HStack fontSize={14} gap={8}>
              <Text as="dt">メールアドレス:</Text>
              <Text as="dd">poteboy.dev [at] gmail.com</Text>
            </HStack>
          </VStack>
          <Box as="section" mt={32}>
            <Heading
              as="h2"
              fontSize={18}
              fontWeight={500}
              borderBottom="1px solid #d6e3ed"
            >
              料金
            </Heading>
            <VStack as="dl" padding="12px" gap={16}>
              <Flex flexDir={["column", "row"]} fontSize={14} gap={8}>
                <Text as="dt">準委任契約での開発支援:</Text>
                <Text as="dd">¥8,250~ / 1時間</Text>
              </Flex>
              <Flex flexDir={["column", "row"]} fontSize={14} gap={8}>
                <Text as="dt">チャット常駐形式での技術アドバイザリー:</Text>
                <Text as="dd">¥100,000~ / 月</Text>
              </Flex>
              <Flex flexDir={["column", "row"]} fontSize={14} gap={8}>
                <Text as="dt">その他:</Text>
                <Text as="dd">お問い合わせください</Text>
              </Flex>
            </VStack>
          </Box>
          <Box as="section" mt={32}>
            <Heading
              as="h2"
              fontSize={18}
              fontWeight={500}
              borderBottom="1px solid #d6e3ed"
            >
              対応可能領域
            </Heading>
            <VStack padding="12px" gap={16}>
              <Flex as="ul" flexDir="column" fontSize={14} gap={8}>
                <Text as="li">
                  Web、モバイル、デスクトップアプリケーション開発・運用
                </Text>
                <Text as="li">CI/CDや自動テストの構築と速度改善</Text>
                <Text as="li">
                  ブラウザ技術で動くアプリケーションのパフォーマンス改善
                </Text>
                <Text as="li">Node.js関連の技術選定やアーキテクチャ設計</Text>
                <Text as="li">
                  Design Docやコーディングガイドラインなどのドキュメント作成
                </Text>
              </Flex>
            </VStack>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}
