import { Center } from '@chakra-ui/react';
import EpisodeCard from '../../components/common/Cards/EpisodeCard';
import CardSkeleton from '../../components/common/Skeleton/CardSkeleton';
import useEpisodes from '../../hooks/useEpisodes';

const EpisodesPage = () => {
  const { loading, data } = useEpisodes({ currentPage: 1 });

  console.log({ data });

  return (
    <Center flexWrap="wrap" p="30px" gap={6}>
      {loading &&
        new Array(20)
          .fill('')
          .map((_, i) => <CardSkeleton key={i} showCircle={false} />)}
      {data?.results.map((episode) => {
        return <EpisodeCard episode={episode} key={episode.id} />;
      })}
    </Center>
  );
};

export default EpisodesPage;
