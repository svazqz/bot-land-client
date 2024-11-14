import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Bot = {
  __typename?: 'Bot';
  description: Scalars['String']['output'];
  flow: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBot: Bot;
  deleteBot: Scalars['ID']['output'];
  updateBot: Bot;
};


export type MutationCreateBotArgs = {
  description: Scalars['String']['input'];
  flow: Scalars['String']['input'];
  name: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationDeleteBotArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateBotArgs = {
  description: Scalars['String']['input'];
  flow: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getBot?: Maybe<Bot>;
  getBots?: Maybe<Array<Maybe<Bot>>>;
};


export type QueryGetBotArgs = {
  id: Scalars['ID']['input'];
};

export type BotListQueryVariables = Exact<{ [key: string]: never; }>;


export type BotListQuery = { __typename?: 'Query', getBots?: Array<{ __typename?: 'Bot', id: string, name: string, description: string, flow: string } | null> | null };

export type CreateBotMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  flow: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;


export type CreateBotMutation = { __typename?: 'Mutation', createBot: { __typename?: 'Bot', name: string, description: string, flow: string, token: string } };


export const BotListDocument = gql`
    query BotList {
  getBots {
    id
    name
    description
    flow
  }
}
    `;

/**
 * __useBotListQuery__
 *
 * To run a query within a React component, call `useBotListQuery` and pass it any options that fit your needs.
 * When your component renders, `useBotListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBotListQuery({
 *   variables: {
 *   },
 * });
 */
export function useBotListQuery(baseOptions?: Apollo.QueryHookOptions<BotListQuery, BotListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BotListQuery, BotListQueryVariables>(BotListDocument, options);
      }
export function useBotListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BotListQuery, BotListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BotListQuery, BotListQueryVariables>(BotListDocument, options);
        }
export function useBotListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BotListQuery, BotListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BotListQuery, BotListQueryVariables>(BotListDocument, options);
        }
export type BotListQueryHookResult = ReturnType<typeof useBotListQuery>;
export type BotListLazyQueryHookResult = ReturnType<typeof useBotListLazyQuery>;
export type BotListSuspenseQueryHookResult = ReturnType<typeof useBotListSuspenseQuery>;
export type BotListQueryResult = Apollo.QueryResult<BotListQuery, BotListQueryVariables>;
export const CreateBotDocument = gql`
    mutation CreateBot($name: String!, $description: String!, $flow: String!, $token: String!) {
  createBot(name: $name, description: $description, flow: $flow, token: $token) {
    name
    description
    flow
    token
  }
}
    `;
export type CreateBotMutationFn = Apollo.MutationFunction<CreateBotMutation, CreateBotMutationVariables>;

/**
 * __useCreateBotMutation__
 *
 * To run a mutation, you first call `useCreateBotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBotMutation, { data, loading, error }] = useCreateBotMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      flow: // value for 'flow'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useCreateBotMutation(baseOptions?: Apollo.MutationHookOptions<CreateBotMutation, CreateBotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBotMutation, CreateBotMutationVariables>(CreateBotDocument, options);
      }
export type CreateBotMutationHookResult = ReturnType<typeof useCreateBotMutation>;
export type CreateBotMutationResult = Apollo.MutationResult<CreateBotMutation>;
export type CreateBotMutationOptions = Apollo.BaseMutationOptions<CreateBotMutation, CreateBotMutationVariables>;