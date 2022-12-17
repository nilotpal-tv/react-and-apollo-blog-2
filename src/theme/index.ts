import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
      body: {
        width: '100%',
        minHeight: '100%',
        color: '#858699',
        bgColor: '#141517',
      },
    },
  },
});

export default theme;
