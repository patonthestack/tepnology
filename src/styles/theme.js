import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import fonts from './fonts';
import space from './space';
import breakpoints from './breakpoints';
import sizes from './sizes';
import zindexes from './zindexes';
import global from './global';

const customTheme = extendTheme({
  ...global,
  ...colors,
  ...fonts,
  ...space,
  ...breakpoints,
  ...sizes,
  ...zindexes,
});

export default {
  ...customTheme,
};
