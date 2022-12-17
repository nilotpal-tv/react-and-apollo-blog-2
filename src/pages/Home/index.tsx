import { Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import CharacterCard from '../../components/common/Cards/CharacterCard';
import Pagination from '../../components/common/Pagination';
import CardSkeleton from '../../components/common/Skeleton/CardSkeleton';

import useCharacters from '../../hooks/useCharacters';
import usePagination from '../../hooks/usePagination';

const HomePage = () => {
  const { currentPage, handleNextClickClick, handlePreviousClick } =
    usePagination();
  const { data, loading } = useCharacters({ currentPage });
  const [pageCount, setPageCount] = useState(data?.info.pages);

  useEffect(() => {
    if (!pageCount) setPageCount(data?.info.pages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.info]);

  return (
    <Center flexWrap="wrap" p="30px" gap={6}>
      {loading && <CardSkeleton items={20} />}
      {data?.results.map((character) => {
        return <CharacterCard character={character} key={character.id} />;
      })}
      <Pagination
        currentPage={currentPage}
        itemsCount={pageCount!}
        onPrevious={handlePreviousClick}
        onNext={() => handleNextClickClick(pageCount!)}
      />
    </Center>
  );
};

export default HomePage;
