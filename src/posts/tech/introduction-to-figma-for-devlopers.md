---
title: 'Introduction to Figma for Developers'
date: '2022-06-18'
tags: ['figma', 'css']
icon: 🍑
---

## Advantages of learning Figma for developers

<img src="https://res.cloudinary.com/zenn/image/fetch/s--W1jFsahe--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png" />

Many companies have recently adopted Figma as their main design tool, for reasons such as the ability to collaboratively edit in the browser.

Generally, front-end engineers proceed with implementation of UI development based on the design files created by designers in Figma, but I believe that if developers have some knowledge of Figma, they can implement UI more smoothly and speedily.

Specifically, knowledge of Figma provides the following benefits for developers
- improves capablility of capturing the designer's intent
- provides designers and engineers with a common understandings 
- lets developer modify a Figma file from a developers' perspective

Therefore, in this post, I would like to explain the basics of Figma from a developer's point of view with its application to implementation.

## Style

Figma allows you to define colors, text, and effects that are used many times throughout the design file.

The defined style is shown in the right panel on Figma as follows.

<img src="https://storage.googleapis.com/zenn-user-upload/f3762545f2bf-20220520.png" />

Here, the text Body/1 is defined as `font-family: Hiragino Sans; font-size: 16px; line-height: 150%; font-weight: 400;`. 

The defined design tokens act as a common language between engineers and designers, but if the engineers are unaware of the existence of this feature,  they are most likely to check the style from Inspect every time and write CSS accordingly (I have seen such a situation several times).

Conversely, if you are aware of the existence of Figma styles, you can achieve the above styling by simply passing the corresponding variant in the component props by setting the variant in the component library's theme as follows.

```tsx:theme.ts
import { extendTheme } from 'native-base';

export const theme = extendTheme({
  components: {
    Text: {
      variants: {
        body1: () => ({
          fontWeight: 400,
          fontSize: 16,
          fontFamily: 'Hiragino Sans',
          lineHeight: '150%',
        }),
      },
    },
  },
});

///Use the following on the component side
<Text variant='body1'>こんにちわ</Text>

```