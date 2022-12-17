import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
      body: {
        color: '#858699',
        bgColor: '#1d1e2b',
        width: '100%',
        minHeight: '100%',
      },
    },
  },
});

export default theme;
