import { Skeleton, SkeletonText, Spinner, Stack } from '@chakra-ui/react';

const PageSkeleton = () => {
  return (
    <Stack w={{ base: '100%', lg: '700px' }}>
      <Skeleton h="sm" w={{ base: '100%', lg: '85%' }} mb="5" />
      <SkeletonText
        mt="3"
        spacing="2"
        noOfLines={2}
        skeletonHeight="3"
        w={{ base: '200px', lg: '300px' }}
      />
      <div>
        <SkeletonText
          mt="10px"
          spacing="2"
          noOfLines={2}
          skeletonHeight="3"
          w={{ base: '120px', lg: '180px' }}
        />
      </div>
      <div>
        <Spinner mt="15px" size="lg" />
      </div>
    </Stack>
  );
};

export default PageSkeleton;
