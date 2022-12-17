import { Box, Center } from '@chakra-ui/react';
import React from 'react';
import Text from '../components/common/Text';

type ErrorBoundaryProps = {
  error: string | undefined;
  children: React.ReactNode;
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children, error }) => {
  return (
    <Center p="30px">
      <Box flexDirection="column" w="600px">
        {error && (
          <Text fontSize="30px" textAlign="center" mt="20px">
            {error}
          </Text>
        )}
        {!error && children}
      </Box>
    </Center>
  );
};

export default ErrorBoundary;
