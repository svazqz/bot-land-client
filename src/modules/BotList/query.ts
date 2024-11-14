import { gql } from '@apollo/client';

export const QUERY_BOT_LIST = gql`
  query BotList {
    getBots{
      id,
      name,
      description,
      flow
    }
  }
`;
