import { useQuery } from '@apollo/client';
import CharacterOperations from '../graphql/operations/characters';
import { QueryInput } from '../types';
import { CharacterResult } from '../types/character';

export type CharacterResponse = {
  character: CharacterResult;
};

const useCharacter = ({ id = 1 }: QueryInput) => {
  const { data, fetchMore, loading, error } = useQuery<
    CharacterResponse,
    QueryInput
  >(CharacterOperations.Query.singleCharacter, {
    variables: { id },
  });

  return {
    loading,
    fetchMore,
    error: error?.message,
    data: data?.character,
  };
};

export default useCharacter;
