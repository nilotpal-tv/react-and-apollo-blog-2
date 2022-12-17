import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonCircle,
} from '@chakra-ui/react';
import { memo } from 'react';

type CardSkeletonProps = {
  items: number;
  showCircle?: boolean;
};

const CardSkeleton: React.FC<CardSkeletonProps> = ({
  items,
  showCircle = true,
}) => {
  const ITEMS = new Array(items).fill(0);

  return (
    <>
      {ITEMS.map((_, i) => (
        <Card
          w="300px"
          border="1px"
          borderRadius="lg"
          borderColor="whiteAlpha.200"
          key={i}>
          <CardBody>
            <HStack gap={3} p="3">
              {showCircle && <SkeletonCircle w="50px" h="40px" />}
              <div style={{ width: '100%' }}>
                <Skeleton size="10" h="10px" mb="2" w="60%" />
                <Skeleton size="10" h="10px" mb="2" w="50%" />
                <Skeleton size="10" h="10px" w="30%" />
              </div>
            </HStack>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default memo(CardSkeleton);
