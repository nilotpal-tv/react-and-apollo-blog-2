import { useQuery } from '@apollo/client';
import EpisodeOperations from '../graphql/operations/episodes';
import { Pagination, PaginationInfo, QueryPaginationInput } from '../types';
import { EpisodeResult } from '../types/episode';

export type EpisodesResponse = {
  episodes: {
    results: EpisodeResult[];
    info: PaginationInfo;
  };
};

const useEpisodes = ({ currentPage = 1 }: Pagination) => {
  const { data, fetchMore, loading, error } = useQuery<
    EpisodesResponse,
    QueryPaginationInput
  >(EpisodeOperations.Query.allEpisodes, {
    variables: { page: currentPage },
  });

  return {
    loading,
    fetchMore,
    data: data?.episodes,
    error: error?.message,
  };
};

export default useEpisodes;
