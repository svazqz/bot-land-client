import * as React from 'react';
import { useCreateBotMutation } from '../../generated/graphql';
import './styles.css';

interface Props {}

const CreateBot: React.FC<Props> = () => {
  const [mutateFunction, { data, loading, error }] = useCreateBotMutation();
  const createBot = () => {
    mutateFunction({
      variables: {
        name: 'Test',
        description: 'Description',
        token: '98289482409823084',
        flow: '{}',
      },
    });
  };

  return <button onClick={() => createBot()}>Create Pet</button>;
};

export default CreateBot;
