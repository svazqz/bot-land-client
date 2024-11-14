import { useState } from 'react';
import './App.css';
import BotListContainer from './components/BotList';
import CreateBotContainer from './components/CreateBot';

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
