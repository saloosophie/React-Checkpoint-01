// src/components/Player.js
import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px', textAlign: 'center' }}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe :</strong> {team} <br />
          <strong>Nationalité :</strong> {nationality} <br />
          <strong>Numéro de maillot :</strong> {jerseyNumber} <br />
          <strong>Âge :</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Props par défaut
Player.defaultProps = {
  name: "Nom inconnu",
  team: "Équipe inconnue",
  nationality: "Nationalité inconnue",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/150",
};

export default Player;