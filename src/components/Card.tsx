import React from 'react';
import { Box, Text, Button, Badge, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export interface CardProps {
  viewType: string;
  title: string;
  image?: string;
  description?: string;
  link: string;
  badgeTitle?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const router = useRouter();
  return (
    <>
      {props.viewType === 'list' ? (
        <NextLink href={props.link}>
          <Box
            cursor="pointer"
            overflow="hidden"
            bg="white"
            justifyItems="flex-start"
            textAlign="left"
            alignItems="flex-start"
            m="0 auto"
            borderRadius={8}
          >
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Premium
            </Badge>
            <Box pt={5} ml={['0', '0', '10px']}>
              <Image src={props.image} alt={props.title} maxWidth="100px" />
            </Box>

            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                <Text>{props.title}</Text>
              </Box>

              <Box>
                <Button
                  onClick={() => router.push(props.link)}
                  type="button"
                  backgroundColor="gray.900"
                  color="white"
                  fontWeight="medium"
                  mt={4}
                  h="30px"
                  fontSize="md"
                  _hover={{ bg: 'gray.700' }}
                  _active={{
                    bg: 'gray.800',
                    transform: 'scale(0.95)',
                  }}
                >
                  Click to Try
                </Button>
              </Box>
            </Box>
          </Box>
        </NextLink>
      ) : (
        <NextLink href={props.link}>
          <Box
            cursor="pointer"
            overflow="hidden"
            bg="white"
            justifyContent="center"
            justifyItems="center"
            textAlign="center"
            alignItems="center"
            m="0 auto"
            borderRadius={8}
          >
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {props.badgeTitle}
            </Badge>
            <Box
              pt={5}
              justifyContent="center"
              justifyItems="center"
              textAlign="center"
              alignItems="center"
              m="0 auto"
            >
              <Image
                src={props.image}
                alt={props.title}
                maxWidth="100px"
                justifyContent="center"
                justifyItems="center"
                textAlign="center"
                alignItems="center"
                m="0 auto"
              />
            </Box>

            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                // isTruncated
                maxW="250px"
                word-wrap="break-word"
              >
                <Text>{props.title}</Text>
              </Box>

              <Box>
                <Button
                  onClick={() => router.push(props.link)}
                  type="button"
                  backgroundColor="gray.900"
                  color="white"
                  fontWeight="medium"
                  mt={4}
                  h="30px"
                  fontSize="md"
                  _hover={{ bg: 'gray.700' }}
                  _active={{
                    bg: 'gray.800',
                    transform: 'scale(0.95)',
                  }}
                >
                  Try Here
                </Button>
              </Box>
            </Box>
          </Box>
        </NextLink>
      )}
    </>
  );
};
