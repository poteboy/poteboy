import { Box, VStack, Text, HStack, Avatar } from '@chakra-ui/react';
import { Header, Spacer, Footer } from '@src/components';
import type { NextPage } from 'next';
import React from 'react';
import { BreakPoint, colors } from '@src/styles';
import { useWindowSize } from '@src/hooks';

const About: NextPage = () => {
  const { width } = useWindowSize();
  const padding: `${number}px ${number}px` =
    width && width > BreakPoint ? `${42}px ${42}px` : `${24}px ${14}px`;

  return (
    <>
      <VStack bg={colors.BackGround} minH='100vh'>
        <Header topic='about' />
        <VStack maxW={`${BreakPoint}px`} p='20px'>
          <Box
            boxShadow={boxShadow}
            bg={bg}
            p={padding}
            alignItems='flex-start'
            minW='350px'
            borderRadius='20px'
          >
            <Text as='h2' variant='heading1'>
              Profile 🍑
            </Text>
            <VStack gap='10px' alignItems='flex-start' py='12px'>
              <HStack gap='12px'>
                <Avatar
                  src={require('@src/public/icons/poteboy.png')}
                  h='80px'
                  w='80px'
                  bg={colors.Primary.Light}
                />
                <VStack gap='4px' alignItems='flex-start'>
                  <Text variant='caption'>
                    Keita Furuse {'{'} Poteboy {'}'}
                  </Text>
                  <Text pl='4px'>design engineer / front end developer in Japan.</Text>
                </VStack>
              </HStack>
            </VStack>
            <Spacer size={16} />
            <Text as='h2' variant='heading1'>
              Work Experience ⚡️
            </Text>
            <VStack gap='10px' alignItems='flex-start' py='12px'>
              {workExperiences.map((experience) => {
                return <ExperienceCard {...experience} />;
              })}
            </VStack>
            <Spacer size={16} />
            <Text as='h2' variant='heading1'>
              Education 🐻
            </Text>
            <VStack gap='10px' alignItems='flex-start' py='12px'>
              {educationExperience.map((experience) => {
                return <ExperienceCard {...experience} />;
              })}
            </VStack>
          </Box>
        </VStack>
        <Spacer size={40} />
      </VStack>
      <Footer />
    </>
  );
};

export default About;

const workExperiences: Experience[] = [
  {
    name: 'HiCustomer, Inc.',
    duration: 'Sep 2022 ~ Current',
    description: 'TypeScript, React, GraphQL, Express',
  },
  {
    name: 'THECOO, Inc.',
    duration: 'Jun 2022 ~ Current',
    description: 'JavaScript, Vue, Express',
  },
  {
    name: 'MICIN, Inc.',
    duration: 'Jul 2020 ~ Sep 2022',
    description: 'TypeScript, React Native, Next.js, Angular, Ruby on Rails',
  },
];

const educationExperience: Experience[] = [
  {
    name: 'Waseda University',
    duration: 'April 2017 ~ March 2021',
    description:
      'School of International Liberal Studies with a Concentration in Mathematical Sciences',
  },
];

type Experience = {
  name: string;
  duration: string;
  description: string;
};

const ExperienceCard: React.FC<Experience> = React.memo((props) => (
  <VStack p='0px 12px' alignItems='flex-start'>
    <HStack>
      <Text variant='caption'>{props.name}</Text>
      <Text variant='sub'>{props.duration}</Text>
    </HStack>
    <Text pl={1} color={colors.Fonts.Description}>
      {props.description}
    </Text>
  </VStack>
));

const bg =
  'linear-gradient(hsla(0,0%,100%,.4),hsla(0,0%,100%,.3) 25%,rgba(246,249,252,.3) 50%,#f6f9fc 60%)';
const boxShadow =
  'inset 0 1px 1px 0 hsl(0deg 0% 100% / 10%), 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%)';
