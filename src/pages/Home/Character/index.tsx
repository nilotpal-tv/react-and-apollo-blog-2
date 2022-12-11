import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Tag,
  TagLabel,
  Text,
} from '@chakra-ui/react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PageSkeleton from '../../../components/Skeleton/PageSkeleton';
import useCharacter from '../../../hooks/useCharacter';

const CharacterPage = () => {
  const { id } = useParams();
  const { data, loading } = useCharacter({ id: Number(id) });
  const navigate = useNavigate();

  return (
    <Center p="30px" bgColor="#231f20" minH="100vh">
      <Button size="sm" alignSelf="flex-start" onClick={() => navigate(-1)}>
        &#8592; Back
      </Button>
      {loading && <PageSkeleton />}
      {!loading && (
        <Box flexDirection="column" w="700px">
          <Image src={data?.image} />
          <Box mt="30px">
            <Text color="gray.300">{data?.name}</Text>
            <Text color="gray.300">{data?.gender}</Text>
            <Text color="gray.300">{data?.status}</Text>
            <Text color="gray.300">{data?.type}</Text>
            <Box>
              <Text color="gray.300">Location</Text>
              <Text color="gray.300">{data?.location.name}</Text>
              <Flex wrap="wrap" gap={1}>
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
        </Box>
      )}
    </Center>
  );
};

export default CharacterPage;
