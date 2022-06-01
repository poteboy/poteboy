import React, { FC, memo, useEffect } from 'react'
import { Box, VStack, Text, StyleProps } from '@chakra-ui/react';
import * as cheerio from 'cheerio'

type Props = {
    content: string; // content with HTML tag
} & StyleProps

export const TableContents: FC<Props> = memo(({ content, ...style }) => {

    const arr: TableElement[] = cheerio.load(content)('h1, h2, h3').toArray().map(data => {

        // 型が効かない
        const text = (data.children as any[]).find(child => typeof child?.data === 'string').data
        return {
            text,
            id: data.attribs.id,
            name: data.name
        }
    })

    return (
        <Box as='nav' bg='#f5f5f5' p={5} borderRadius='12px' {...style}>
            <Text variant='heading3'>目次</Text>
            <VStack as='ul' alignItems='flex-start' p={4}>
                {arr.map(val => {
                    return <Text as='li' >{val.text}</Text>
                })}
            </VStack>
        </Box>
    )
})

type TableElement = {
    text: string;
    id: string;
    name: string
}