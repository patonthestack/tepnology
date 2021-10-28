import {
  Box,
  Heading,
  Text,
  Link,
  Image,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import { Container, Layout } from 'components/index';
import NextLink from 'next/link';
import { Card } from 'components/Card';

const Home: React.FC = () => {
  // viewType to be 'grid' or 'list'
  const viewType = 'grid';
  return (
    <Layout
      title="Features"
      description="features"
      canonical="/features"
      hasNavbar
      hasFooter
      schemaData={null}
    >
      <Container fluid>
        <Heading
          mt={20}
          fontWeight="700"
          fontSize="2em"
          as="h3"
          textAlign={['center', 'center', 'center', 'center']}
        >
          Features
        </Heading>
        <Text textAlign={['center', 'center', 'center', 'center']}>
          A small taste of the different features we can implement for your
          application
        </Text>
        <Box>
          <Stack direction="row">
            <SimpleGrid
              mt={4}
              // columns={[1, 1, 5]}
              spacing={5}
              mx={['0px', '0px', '0px']}
              // @ts-ignore
              columns={viewType === 'list' ? 1 : [1, 1, 2, 5, 5]}
              overflow="hidden"
            >
              <Box mt={5}>
                <Card
                  viewType={viewType}
                  title="Multi-Select"
                  link={'/features/multi-select'}
                ></Card>
              </Box>
              <Box mt={5}>
                <Card
                  viewType={viewType}
                  title="Content of feature to go here"
                  link={'/'}
                ></Card>
              </Box>
              <Box mt={5}>
                <Card
                  viewType={viewType}
                  title="Content of feature to go here"
                  link={'/'}
                ></Card>
              </Box>
              <Box mt={5}>
                <Card
                  viewType={viewType}
                  title="Content of feature to go here"
                  link={'/'}
                ></Card>
              </Box>
              <Box mt={5}>
                <Card
                  viewType={viewType}
                  title="Content of feature to go here"
                  link={'/'}
                ></Card>
              </Box>
              <Box mt={5}>
                <Card
                  viewType={viewType}
                  title="Content of feature to go here"
                  link={'/'}
                ></Card>
              </Box>
            </SimpleGrid>
          </Stack>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
