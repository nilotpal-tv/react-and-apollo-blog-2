import { Skeleton, SkeletonText, Spinner, Stack } from '@chakra-ui/react';

const PageSkeleton = () => {
  return (
    <Stack w="700px">
      <Skeleton h="sm" w="85%" mb="5" />
      <SkeletonText
        mt="3"
        w="250px"
        spacing="2"
        noOfLines={2}
        skeletonHeight="3"
      />
      <div>
        <SkeletonText
          mt="10px"
          w="150px"
          spacing="2"
          noOfLines={2}
          skeletonHeight="3"
        />
      </div>
      <div>
        <Spinner mt="15px" size="lg" />
      </div>
    </Stack>
  );
};

export default PageSkeleton;
