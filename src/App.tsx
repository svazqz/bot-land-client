import React from 'react';
import './App.css';
import PetListContainer from './components/PetList';
import CreatePetContainer from './components/CreatePet';

function App() {
  return (
    <div className="App">
      <PetListContainer></PetListContainer>
      <CreatePetContainer></CreatePetContainer>
    </div>
  );
}

export default App;
