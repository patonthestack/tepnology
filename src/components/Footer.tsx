import React from 'react';
import { Link, Flex, Text } from '@chakra-ui/react';

export const Footer: React.FC = () => {
  return (
    <>
      <Flex mb={['80px', '60px', '40px']} mt={5} justify="center">
        <Text fontSize="sm">
          Copyright &copy;{' '}
          <Link href="https://tepnology.com">tepnology.com</Link>
        </Text>
      </Flex>
    </>
  );
};
