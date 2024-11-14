import { gql } from '@apollo/client';

export const QUERY_LAUNCH_LIST = gql`
  query PetList {
    getPets{
      id,
      age,
      name,
      ownerName,
      pictureUri
    }
  }
`;
