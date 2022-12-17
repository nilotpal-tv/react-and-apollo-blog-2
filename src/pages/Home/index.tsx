import { Center } from '@chakra-ui/react';

import CharacterCard from '../../components/common/Cards/CharacterCard';
import CardSkeleton from '../../components/common/Skeleton/CardSkeleton';
import useCharacters from '../../hooks/useCharacters';

const HomePage = () => {
  const { data, loading } = useCharacters({ currentPage: 1 });

  return (
    <Center flexWrap="wrap" p="30px" gap={6}>
      {loading &&
        new Array(20).fill('').map((_, i) => <CardSkeleton key={i} />)}
      {data?.results.map((character) => {
        return <CharacterCard character={character} key={character.id} />;
      })}
    </Center>
  );
};

export default HomePage;
