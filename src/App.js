import React from 'react';
import {
    BrowserRouter as Router,
   Routes,
    Route
  } from "react-router-dom";

  import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Start from './components/Start';

function App() {
  return (
    <>
      <Router>
            <Routes>
            <Route exact path="/home" element={ <Home/>} /> 
            <Route exact path="/login" element={ <Login />} /> 
            <Route exact path="/signup" element={<Signup/>} /> 
            <Route exact path="/" element={<Start/>}/>
            </Routes>
        </Router>
    </>
  );
}

export default App;
