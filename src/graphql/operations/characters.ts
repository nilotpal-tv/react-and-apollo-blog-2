import { gql } from '@apollo/client';

const CharacterOperations = {
  Query: {
    allCharacters: gql`
      query GetAllCharacters($page: Int) {
        characters(page: $page) {
          results {
            id
            name
            image
            status
          }
          info {
            count
            pages
          }
        }
      }
    `,

    singleCharacter: gql`
      query GetSingleCharacter($id: ID!) {
        character(id: $id) {
          id
          name
          type
          image
          status
          species
          gender
          location {
            id
            name
            residents {
              id
              name
            }
          }
        }
      }
    `,
  },
};

export default CharacterOperations;
