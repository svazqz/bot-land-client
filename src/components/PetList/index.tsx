import * as React from 'react';
import { usePetListQuery } from '../../generated/graphql';
import PetList from './PetList';

const PetListContainer = () => {
  const { data, error, loading } = usePetListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <PetList data={data} />;
};

export default PetListContainer;