import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { Page } from '../../__generated__/graphql';
import { useEffect, useState } from 'react';

export const GET_PAGE = gql`
  query GET_ALL($type: MediaType, $search: String, $page: Int) {
    Page(page: $page, perPage: 20) {
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
  page: number,
) => {
  const { data, loading, error } = useQuery<{ Page: Page }>(GET_PAGE, {
    variables: {
      type: type || undefined,
      search: search || undefined,
      page: page,
    },
  });

  return { data, loading, error };
};

export const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
