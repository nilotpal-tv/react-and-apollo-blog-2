import { Center, Skeleton, Stack } from '@chakra-ui/react';

const PageSkeleton = () => {
  return (
    <Center w="100%">
      <Stack w="700px">
        <Skeleton h="sm" w="lg" mb="5" />
        <Skeleton h="20px" w="sm" mb="4" />
        <Skeleton h="20px" w="sm" mb="4" />
        <Skeleton h="20px" w="sm" mb="4" />
        <Skeleton h="20px" w="sm" />
      </Stack>
    </Center>
  );
};

export default PageSkeleton;
