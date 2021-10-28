import { Box, useBreakpointValue } from '@chakra-ui/react';
import { BackgroundImage, Container, Layout } from 'components/index';
import { StringOrNumber } from '@chakra-ui/utils';

const Home: React.FC = () => {
  const size = useBreakpointValue<StringOrNumber>({
    // base: '170px',
    // '2xl': 36,
    // '3xl': '185px',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  });
  return (
    <Layout
      title="Home"
      description="Tepnology LLC"
      canonical="/"
      hasNavbar
      hasFooter
      schemaData={null}
    >
      <Container fluid>
        <Box>
          <BackgroundImage size={size}></BackgroundImage>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
