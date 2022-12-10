import { gql } from '@apollo/client';

const EpisodeOperations = {
  Query: {
    allEpisodes: gql`
      query GetAllEpisodes($page: Int) {
        episodes {
          results {
            id
            name
            episode
            air_date
          }
          info {
            count
            pages
          }
        }
      }
    `,

    singleEpisode: gql`
      query GetSingleEpisode($id: ID!) {
        episode($id: ID!) {
          id
          name
          air_date
          episode
          characters {
            id
            name
          }
        }
      }
    `,
  },
};

export default EpisodeOperations;
