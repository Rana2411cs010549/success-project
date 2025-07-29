import React, { useState } from 'react';
import Welcome from './Welcome';
import './App.css'

function App() {
  const [name, setName] = useState('Teja');

  const changeName = () => {
    setName('Ranadhher');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Welcome user={name} />
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
