import { useQuery } from '@apollo/client';
import CharacterOperations from '../graphql/operations/characters';
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
  >(CharacterOperations.Query.allCharacters, {
    variables: { page: currentPage },
  });

  return {
    loading,
    fetchMore,
    error: error?.message,
    data: data?.episodes,
  };
};

export default useEpisodes;
