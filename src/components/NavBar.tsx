import NextLink from 'next/link';
import {
  Box,
  Flex,
  Link,
  Avatar,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Stack,
  Text,
  AvatarBadge,
} from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <>
      <Flex
        as="header"
        position="fixed"
        display="inline-block"
        width="100%"
        bg="white"
        zIndex="2"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          py={4}
          maxW="100%"
          margin="0 auto"
          w="full"
          px={4}
          h="60px"
        >
          <Stack direction={'row'}>
            <Box fontSize={['sm', 'md', 'lg', 'xl']}>
              <Heading as="h1" fontSize="1.125em">
                <NextLink href="/dashboard">
                  <Link
                    _hover={{
                      color: 'gray.500',
                      textDecoration: 'none',
                    }}
                  >
                    Full Site Coming Soon
                    {process.env.NODE_ENV === 'development'}
                  </Link>
                </NextLink>
              </Heading>
            </Box>
          </Stack>

          <Flex justify="center" alignItems="center" zIndex={3}>
            <Menu>
              <>
                <Stack direction="row" spacing={4}>
                  {/* <Box mr={0} pr={0}>
                    <Avatar size="sm" name="N" bg="black">
                      <AvatarBadge
                        borderColor="papayawhip"
                        bg="black"
                        boxSize="1.25em"
                        padding={2}
                      >
                        <Text>2</Text>
                      </AvatarBadge>
                    </Avatar>
                  </Box> */}

                  {/* You can also change the borderColor and bg of the badge */}
                  {/* <Box mr={3} pr={0}>
                    <Avatar size="sm" name="M" bg="black">
                      <AvatarBadge
                        borderColor="papayawhip"
                        bg="black"
                        boxSize="1.25em"
                        padding={2}
                      >
                        <Text fontSize="10px">13</Text>
                      </AvatarBadge>
                    </Avatar>
                  </Box> */}
                </Stack>
                {/* <MenuButton mr={0} pr={0}>
                    <Avatar size="sm" src={userData?.user.photoUrl} />
                  </MenuButton> */}
                <MenuList>
                  <MenuGroup
                    title="PROFILE"
                    className="random-color-border-bottom"
                    fontSize="1em"
                    fontWeight="600"
                  ></MenuGroup>

                  <MenuGroup
                    title="SESSION"
                    className="random-color-border-bottom"
                    fontSize="1em"
                    fontWeight="600"
                  ></MenuGroup>
                </MenuList>
              </>
            </Menu>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
