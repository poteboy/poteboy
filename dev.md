

# 開発メモ

## ダークモード

`src/styles/style.css`でダークモードとライトモード両方の色が定義されている。
パフォーマンス観点からReactのContextのようにグローバスStateは使わずCSS変数で管理し、HTMLのData属性にテーマ値を設定している。

`src/styles/color.ts`参照

## Header

UIとしては1番複雑。
`useHistory`を元に前回と今のPathを比較してアニメーションを描画している

## ブログ

ブログの型は`@src/schema/blog.schema.ts`にあります。
この型定義で`safeParse`しているので、Firestore上におかしな値がある場合はSSGビルド時に弾かれます。

ブログの記事は`src/posts`配下にマークダウン形式で書きます。
~~ブログ内で画像を使う場合は`src/public/blog`内に画像を配置し、mdファイル内で以下のように記述します~~
👆はまだ未解決

```md
![alt][xxx.png]
```