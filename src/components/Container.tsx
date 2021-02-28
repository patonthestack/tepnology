import { Flex, Box } from '@chakra-ui/react';

export interface ContainerProps {
  fluid?: boolean;
}

export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <Flex
      w="100%"
      direction="column"
      maxW={{ xl: props.fluid ? '100%' : '1200px' }}
      m="0 auto"
    >
      <Box mx={4}>{props.children}</Box>
    </Flex>
  );
};
