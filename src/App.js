// src/App.js
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import './App.css';

const firstName = "Salem";

function App() {
  return (
    <Container className="mt-5">
      <Card style={{ width: '18rem', margin: 'auto' }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div className="mt-3 text-center">
        <p className="welcome-message">
          {firstName ? `Bonjour, ${firstName}` : "Bonjour !"}
        </p>
        {firstName && (
          <div className="user-image-container">
            <img src="https://img.freepik.com/vector-premium/icono-perfil-avatar-estilo-plano-ilustracion-vectorial-perfil-usuario-masculino-fondo-aislado-concepto-negocio-signo-perfil-masculino_157943-38764.jpg" alt="User"
              className="user-image"/>
          </div>
        )}
      </div>
    </Container>
  );
}

export default App;