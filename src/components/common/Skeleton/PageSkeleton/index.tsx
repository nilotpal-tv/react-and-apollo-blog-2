import { Skeleton, Stack } from '@chakra-ui/react';

const PageSkeleton = () => {
  return (
    <Stack w="700px">
      <Skeleton h="sm" w="lg" mb="5" />
      <Skeleton h="20px" w="sm" mb="4" />
      <Skeleton h="20px" w="sm" mb="4" />
      <Skeleton h="20px" w="sm" mb="4" />
      <Skeleton h="20px" w="sm" />
    </Stack>
  );
};

export default PageSkeleton;
