import React from 'react';
import logo from './logo.svg';
import Navbar from "react-bootstrap/Navbar";
import './App.css';
import Recorder from './recorder';

const App = () => {
  return (
    <div className="App">
      <Navbar bg="primary" expand="lg" variant="dark">
        <Navbar.Brand href="#home">Transcription App</Navbar.Brand>
      </Navbar>
      <Recorder />
    </div>
  );
}

export default App;
