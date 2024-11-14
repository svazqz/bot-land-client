import { useState } from 'react';
import './App.css';
import BotListContainer from './modules/BotList';
import CreateBotContainer from './modules/CreateBot';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BotListContainer></BotListContainer>
      <CreateBotContainer></CreateBotContainer>
    </>
  );
}

export default App;
