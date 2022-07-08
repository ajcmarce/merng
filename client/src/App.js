import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/auth';
import AuthRoute from './utils/authRoute';

function App() {
  return (
    <AuthProvider>
      <Router >
        <Container>
          <MenuBar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<AuthRoute ifNotAuth="/" component={<Login />} />} />
            <Route exact path="/Register" element={<AuthRoute ifNotAuth="/" component={<Register />} />} />
          </Routes>  
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
