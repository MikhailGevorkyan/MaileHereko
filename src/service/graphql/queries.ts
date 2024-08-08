import { gql } from '../../__generated__';

export const GET_PAGE = gql(`{
  Page {
    activities {}
    media {
      id
      title {
        english
      }
      coverImage {
        extraLarge
      }
      averageScore
    }
  }
}`);
