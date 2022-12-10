import { useQuery } from '@apollo/client';
import CharacterOperations from '../graphql/operations/characters';
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
  >(CharacterOperations.Query.allCharacters, {
    variables: { id },
  });

  return {
    loading,
    fetchMore,
    error: error?.message,
    data: data?.episode,
  };
};

export default useEpisode;
