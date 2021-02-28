import { Box, Heading, Text, Link } from '@chakra-ui/react';
import { Container, Layout } from 'components/index';
import NextLink from 'next/link';

const Home: React.FC = () => {
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
          Welcome to Tepnology LLC
        </Heading>
        <Text textAlign={['center', 'center', 'center', 'center']}>
          Site under development, content coming soon!
        </Text>
      </Container>
    </Layout>
  );
};

export default Home;
