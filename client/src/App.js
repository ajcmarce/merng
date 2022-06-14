import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';



function App() {
  return (
      <Router>
        <Container>
          <MenuBar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Register" element={<Register />} />
          </Routes>  
        </Container>
      </Router>
  );
}

export default App;
