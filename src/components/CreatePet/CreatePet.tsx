import * as React from 'react';
import { useCreatePetMutation } from '../../generated/graphql';
import './styles.css';

interface Props {
}

const LaunchList: React.FC<Props> = () => {
  const [mutateFunction, { data, loading, error }] = useCreatePetMutation();
  const createPet = () => {
    mutateFunction({
      variables: {
        name: "Test",
        age: 10,
        ownerName: "Owner",
        pictureUri: '',
      }
    })
  }

  return <input type='button' value='Create Pet' onClick={() => createPet()} />
};

export default LaunchList;