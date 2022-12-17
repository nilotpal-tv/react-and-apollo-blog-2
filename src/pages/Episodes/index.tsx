import { Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import EpisodeCard from '../../components/common/Cards/EpisodeCard';
import Pagination from '../../components/common/Pagination';
import CardSkeleton from '../../components/common/Skeleton/CardSkeleton';
import useEpisodes from '../../hooks/useEpisodes';
import usePagination from '../../hooks/usePagination';

const EpisodesPage = () => {
  const { currentPage, handleNextClickClick, handlePreviousClick } =
    usePagination();
  const { loading, data } = useEpisodes({ currentPage });
  const [pageCount, setPageCount] = useState(data?.info.pages);

  useEffect(() => {
    if (!pageCount) setPageCount(data?.info.pages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.info]);

  return (
    <Center flexWrap="wrap" p="30px" gap={6}>
      {loading && <CardSkeleton showCircle={false} items={20} />}
      {data?.results.map((episode) => {
        return <EpisodeCard episode={episode} key={episode.id} />;
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

export default EpisodesPage;
