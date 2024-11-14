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

export type Mutation = {
  __typename?: 'Mutation';
  createPet: Pet;
  deletePet: Scalars['ID']['output'];
  updatePet: Pet;
};


export type MutationCreatePetArgs = {
  age: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  ownerName: Scalars['String']['input'];
  pictureUri?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeletePetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdatePetArgs = {
  age?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  ownerName?: InputMaybe<Scalars['String']['input']>;
  pictureUri?: InputMaybe<Scalars['String']['input']>;
};

export type Pet = {
  __typename?: 'Pet';
  age: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  ownerName: Scalars['String']['output'];
  pictureUri?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getPet?: Maybe<Pet>;
  getPets?: Maybe<Array<Maybe<Pet>>>;
};


export type QueryGetPetArgs = {
  id: Scalars['ID']['input'];
};

export type CreatePetMutationVariables = Exact<{
  name: Scalars['String']['input'];
  age: Scalars['Int']['input'];
  ownerName: Scalars['String']['input'];
  pictureUri: Scalars['String']['input'];
}>;


export type CreatePetMutation = { __typename?: 'Mutation', createPet: { __typename?: 'Pet', name: string, ownerName: string, pictureUri?: string | null, age: number, id: string } };

export type PetListQueryVariables = Exact<{ [key: string]: never; }>;


export type PetListQuery = { __typename?: 'Query', getPets?: Array<{ __typename?: 'Pet', id: string, age: number, name: string, ownerName: string, pictureUri?: string | null } | null> | null };


export const CreatePetDocument = gql`
    mutation CreatePet($name: String!, $age: Int!, $ownerName: String!, $pictureUri: String!) {
  createPet(
    name: $name
    age: $age
    ownerName: $ownerName
    pictureUri: $pictureUri
  ) {
    name
    ownerName
    pictureUri
    age
    id
  }
}
    `;
export type CreatePetMutationFn = Apollo.MutationFunction<CreatePetMutation, CreatePetMutationVariables>;

/**
 * __useCreatePetMutation__
 *
 * To run a mutation, you first call `useCreatePetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPetMutation, { data, loading, error }] = useCreatePetMutation({
 *   variables: {
 *      name: // value for 'name'
 *      age: // value for 'age'
 *      ownerName: // value for 'ownerName'
 *      pictureUri: // value for 'pictureUri'
 *   },
 * });
 */
export function useCreatePetMutation(baseOptions?: Apollo.MutationHookOptions<CreatePetMutation, CreatePetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePetMutation, CreatePetMutationVariables>(CreatePetDocument, options);
      }
export type CreatePetMutationHookResult = ReturnType<typeof useCreatePetMutation>;
export type CreatePetMutationResult = Apollo.MutationResult<CreatePetMutation>;
export type CreatePetMutationOptions = Apollo.BaseMutationOptions<CreatePetMutation, CreatePetMutationVariables>;
export const PetListDocument = gql`
    query PetList {
  getPets {
    id
    age
    name
    ownerName
    pictureUri
  }
}
    `;

/**
 * __usePetListQuery__
 *
 * To run a query within a React component, call `usePetListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePetListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePetListQuery({
 *   variables: {
 *   },
 * });
 */
export function usePetListQuery(baseOptions?: Apollo.QueryHookOptions<PetListQuery, PetListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PetListQuery, PetListQueryVariables>(PetListDocument, options);
      }
export function usePetListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PetListQuery, PetListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PetListQuery, PetListQueryVariables>(PetListDocument, options);
        }
export function usePetListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PetListQuery, PetListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PetListQuery, PetListQueryVariables>(PetListDocument, options);
        }
export type PetListQueryHookResult = ReturnType<typeof usePetListQuery>;
export type PetListLazyQueryHookResult = ReturnType<typeof usePetListLazyQuery>;
export type PetListSuspenseQueryHookResult = ReturnType<typeof usePetListSuspenseQuery>;
export type PetListQueryResult = Apollo.QueryResult<PetListQuery, PetListQueryVariables>;