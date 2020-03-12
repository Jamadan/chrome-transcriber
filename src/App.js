import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import './App.css';
import { Recorder } from './components/Recorder';

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
