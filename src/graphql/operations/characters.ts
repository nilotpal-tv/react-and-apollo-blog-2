import { gql } from '@apollo/client';

const CharacterOperations = {
  Query: {
    allCharacters: gql`
      query GetAllCharacters {
        characters {
          results {
            name
            status
          }
        }
      }
    `,
  },
};

export default CharacterOperations;
