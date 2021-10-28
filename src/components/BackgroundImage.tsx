import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
export interface BackgroundProps {
  size: any;
}
export const BackgroundImage: FC<BackgroundProps> = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      overflow="hidden"
      backgroundBlendMode="darken"
      bg={`url('/tepnology.svg')`}
      bgSize={['contain', 'contain', 'cover', 'cover']}
      bgRepeat="no-repeat"
    ></Box>
  );
};
