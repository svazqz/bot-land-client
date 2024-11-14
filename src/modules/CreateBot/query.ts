import { gql } from '@apollo/client';

export const CREATE_BOT = gql`
  mutation CreateBot(
    $name: String!
    $description: String!
    $flow: String!
    $token: String!
  ) {
    createBot(
      name: $name
      description: $description
      flow: $flow
      token: $token
    ) {
      name
      description
      flow
      token
    }
  }
`;
