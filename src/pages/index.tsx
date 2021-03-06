import { Box, Heading, Text, Link, Image, SimpleGrid } from '@chakra-ui/react';
import { Container, Layout } from 'components/index';
import NextLink from 'next/link';
import { Card } from 'components/Card';

const Home: React.FC = () => {
  // viewType to be 'grid' or 'list'
  const viewType = 'grid';
  return (
    <Layout
      title="Tepnology LLC"
      description="Tepnology LLC"
      canonical=""
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
          Tepnology, LLC
        </Heading>
        <Text textAlign={['center', 'center', 'center', 'center']}>
          Innovation. Spawns. Invigoration.
        </Text>
        <Box>
          <SimpleGrid
            mt={4}
            columns={[1, 1, 3]}
            spacing={5}
            mx={['0px', '0px', '0px']}
            // @ts-ignore
            columns={viewType === 'list' ? 1 : [1, 1, 2, 3, 3]}
          >
            <Box mt={5}>
              <Card
                viewType={viewType}
                title="Content of feature to go here i.e. progress bar"
                link={'/'}
              ></Card>
            </Box>
            <Box mt={5}>
              <Card
                viewType={viewType}
                title="Content of feature to go here i.e. multi select"
                link={'/'}
              ></Card>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
