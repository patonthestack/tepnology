import { Box, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import { BackgroundImage, Container, Layout } from 'components/index';
import { StringOrNumber } from '@chakra-ui/utils';
import { _usersData } from '@/data/_usersData';
import { User } from 'types/User';
import { AvatarCarousel } from '@/components/AvatarCarousel';

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
  const users: User[] = _usersData;
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
        <Flex
          justify="center"
          alignContent="center"
          mt={['80', '80', '20', '0']}
        >
          <BackgroundImage size={size}></BackgroundImage>
        </Flex>
        <Flex mb={4}>
          <Heading>Playground</Heading>
        </Flex>
        <Box w={'15%'}>
          <AvatarCarousel usersData={users} />
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
