import {
  Box,
  Card,
  CardBody,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';

const CardSkeleton = () => {
  return (
    <Card w="300px" border="1px" borderRadius="lg" borderColor="whiteAlpha.200">
      <CardBody>
        <Box padding="6" boxShadow="lg">
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" spacing="4" noOfLines={4} skeletonHeight="2" />
        </Box>
      </CardBody>
    </Card>
  );
};

export default CardSkeleton;
