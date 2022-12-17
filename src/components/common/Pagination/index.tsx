import { HStack, Text } from '@chakra-ui/react';
import React from 'react';

type PaginationProps = {
  itemsCount: number;
  currentPage: number;
  onNext: () => void;
  onPrevious: () => void;
};

const Pagination: React.FC<PaginationProps> = ({
  itemsCount,
  currentPage,
  onNext,
  onPrevious,
}) => {
  if (itemsCount === 1) return null;

  console.log(itemsCount);

  return (
    <HStack w="container.lg" gap={2} flexWrap="wrap" justifyContent="center">
      <Text
        w="80px"
        py="7px"
        border="1px"
        borderRadius="md"
        textAlign="center"
        onClick={onPrevious}
        borderColor="whiteAlpha.200"
        opacity={currentPage === 1 ? 0.5 : 1}
        cursor={currentPage === 1 ? 'not-allowed' : 'pointer'}
        pointerEvents={currentPage === 1 ? 'none' : 'auto'}>
        Prev
      </Text>
      <Text fontWeight="bold">
        Page {currentPage} of {itemsCount ?? '...'}
      </Text>
      <Text
        w="80px"
        py="7px"
        border="1px"
        onClick={onNext}
        borderRadius="md"
        textAlign="center"
        borderColor="whiteAlpha.200"
        opacity={currentPage === itemsCount ? 0.5 : 1}
        cursor={currentPage === itemsCount ? 'not-allowed' : 'pointer'}
        pointerEvents={currentPage === itemsCount ? 'none' : 'auto'}>
        Next
      </Text>
    </HStack>
  );
};

export default Pagination;
