import { Box, Heading, Text, Link, Image } from '@chakra-ui/react';
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
          i am so in love with Daniela Esteves
        </Heading>
        <Text textAlign={['center', 'center', 'center', 'center']}>
          Daniela Esteves, she the love of my life,{' '}
          <p>better than the resteves</p>
          <p>She make me go crazy,</p>
          <p>Kanye Westeves</p>
          <p>And when she come through?</p>
          <p>it's a fiesteves</p>
          <p>All I wanna do?</p>
          <p>is have some sexteves ;)</p>
        </Text>
      </Container>
    </Layout>
  );
};

export default Home;
