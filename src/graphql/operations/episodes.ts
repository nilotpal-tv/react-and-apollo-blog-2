import { gql } from '@apollo/client';

const EpisodeOperations = {
  Query: {
    allEpisodes: gql`
      query GetAllEpisodes($page: Int) {
        episodes(page: $page) {
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
        episode(id: $id) {
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
