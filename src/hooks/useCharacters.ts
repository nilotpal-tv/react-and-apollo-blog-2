import { useQuery } from '@apollo/client';
import CharacterOperations from '../graphql/operations/characters';
import { Pagination, PaginationInfo, QueryPaginationInput } from '../types';
import { CharacterResult } from '../types/character';

export type CharactersResponse = {
  characters: {
    results: CharacterResult[];
    info: PaginationInfo;
  };
};

const useCharacters = ({ currentPage = 1 }: Pagination) => {
  const { data, fetchMore, loading, error } = useQuery<
    CharactersResponse,
    QueryPaginationInput
  >(CharacterOperations.Query.allCharacters, {
    variables: { page: currentPage },
  });

  return {
    loading,
    fetchMore,
    error: error?.message,
    data: data?.characters,
  };
};

export default useCharacters;
