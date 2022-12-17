import { Box, Flex, HStack, Image, Tag, TagLabel } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';

import BackButton from '../../../components/common/BackButton';
import PageSkeleton from '../../../components/common/Skeleton/PageSkeleton';
import Text from '../../../components/common/Text';
import useCharacter from '../../../hooks/useCharacter';
import ErrorBoundary from '../../../layout/ErrorBoundary';

const CharacterPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useCharacter({ id: Number(id) });

  return (
    <ErrorBoundary error={error}>
      <BackButton mb="15px" />
      {loading && <PageSkeleton />}
      {!loading && (
        <>
          <Image
            src={data?.image}
            width="100%"
            height="360px"
            borderRadius="sm"
            boxShadow="rgb(0 0 0 / 30%) 0px 16px 70px"
          />
          <Box mt="10px">
            <Text fontSize="35px">{data?.name.toUpperCase()}</Text>
            <HStack gap={2}>
              <Text color="whiteAlpha.600">{data?.gender.toUpperCase()}</Text>
              <Text color="whiteAlpha.600">{data?.status.toUpperCase()}</Text>
              {data?.type && (
                <Text color="whiteAlpha.600">{data?.type.toUpperCase()}</Text>
              )}
              <Text color="whiteAlpha.600">{data?.species.toUpperCase()}</Text>
            </HStack>
            <Box mt="15px">
              <Text color="whiteAlpha.700" mb="5px">
                Location
              </Text>
              <Text color="whiteAlpha.600">
                {data?.location.name.toUpperCase()}
              </Text>
              <Flex wrap="wrap" gap={1.5} mt="10px">
                {data?.location?.residents?.map((resident) => (
                  <Link to={`/${resident.id}`} key={resident.id}>
                    <Tag size="sm" variant="subtle" colorScheme="whiteAlpha">
                      <TagLabel>{resident.name}</TagLabel>
                    </Tag>
                  </Link>
                ))}
              </Flex>
            </Box>
          </Box>
        </>
      )}
    </ErrorBoundary>
  );
};

export default CharacterPage;
