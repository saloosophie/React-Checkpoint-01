// src/App.js
import React from 'react';
import PlayersList from './components/PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importez les styles Bootstrap
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Liste des Joueurs</h1>
      <PlayersList />
    </div>
  );
}

export default App;