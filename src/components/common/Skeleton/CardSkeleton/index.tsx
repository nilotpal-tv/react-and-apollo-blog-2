import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const CardSkeleton = () => {
  return (
    <Card w="300px" border="1px" borderRadius="lg" borderColor="whiteAlpha.200">
      <CardBody>
        <Skeleton size="10" h="180px" w="100%" />
        <SkeletonText
          mt="4"
          w="150px"
          spacing="2"
          noOfLines={2}
          skeletonHeight="3"
        />
      </CardBody>
    </Card>
  );
};

export default CardSkeleton;
