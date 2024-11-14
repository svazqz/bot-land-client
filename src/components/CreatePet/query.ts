import { gql } from '@apollo/client';

const CREATE_PET = gql`
  mutation CreatePet($name: String!, $age: Int!, $ownerName: String!, $pictureUri: String!) {
    createPet(name: $name,age: $age, ownerName: $ownerName,pictureUri: $pictureUri){
      name,
      ownerName,
      pictureUri,
      age,
      id
    }
  }
`;
