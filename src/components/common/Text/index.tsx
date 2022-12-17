import { Text as ChakraText, TextProps } from '@chakra-ui/react';
import React from 'react';

const Text: React.FC<TextProps> = ({ children, ...rest }) => {
  return (
    <ChakraText color="gray.300" fontWeight="bold" fontSize="13px" {...rest}>
      {children}
    </ChakraText>
  );
};

export default Text;
