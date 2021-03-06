import React from 'react';
import { Link, Flex, Text, Box, SimpleGrid, Heading } from '@chakra-ui/react';

export const Footer: React.FC = () => {
  return (
    <>
      <Flex mb={['80px', '60px', '40px']} mt={5} justify="center">
        <Box>
          <SimpleGrid
            mt={4}
            columns={[1, 1, 4]}
            spacing={5}
            mx={['0px', '0px', '0px']}
          >
            <Box>
              <Heading as="h3" fontWeight="500" fontSize="1.5em">
                About Us
              </Heading>
            </Box>
            <Box>
              <Heading as="h3" fontWeight="500" fontSize="1.5em">
                Services
              </Heading>
            </Box>
            <Box>
              <Heading as="h3" fontWeight="500" fontSize="1.5em">
                Contracts
              </Heading>
            </Box>
            <Box>
              <Heading as="h3" fontWeight="500" fontSize="1.5em">
                Contact Us
              </Heading>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
      <Flex mb={['80px', '60px', '40px']} mt={5} justify="center">
        <Box>
          <Text fontSize="sm">
            Copyright &copy;{' '}
            <Link href="https://tepnology.com">Tepnology, LLC</Link>
          </Text>
        </Box>
      </Flex>
    </>
  );
};
