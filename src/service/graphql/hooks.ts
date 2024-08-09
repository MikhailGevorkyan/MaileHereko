import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { Page } from '../../__generated__/graphql';

export const GET_PAGE = gql`
  query GET_ALL($type: MediaType, $search: String) {
    Page {
      media(type: $type, search: $search) {
        id
        title {
          english
          romaji
        }
        coverImage {
          extraLarge
        }
        averageScore
      }
    }
  }
`;

export const useGetPage = (
  type: string | undefined,
  search: string | undefined,
) => {
  const { data, loading, error } = useQuery<{ Page: Page }>(GET_PAGE, {
    variables: {
      type: type || undefined,
      search: search || undefined,
    },
  });

  return { data, loading, error };
};
