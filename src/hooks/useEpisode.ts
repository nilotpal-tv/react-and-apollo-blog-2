import { useQuery } from '@apollo/client';
import EpisodeOperations from '../graphql/operations/episodes';
import { PaginationInfo, QueryInput } from '../types';
import { EpisodeResult } from '../types/episode';

export type EpisodeResponse = {
  episode: {
    results: EpisodeResult;
    info: PaginationInfo;
  };
};

const useEpisode = ({ id = 1 }: QueryInput) => {
  const { data, fetchMore, loading, error } = useQuery<
    EpisodeResponse,
    QueryInput
  >(EpisodeOperations.Query.singleEpisode, {
    variables: { id },
  });

  return {
    loading,
    fetchMore,
    data: data?.episode,
    error: error?.message,
  };
};

export default useEpisode;
