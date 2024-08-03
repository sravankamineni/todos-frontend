
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Todos from './components/Todos';
import "./App.css"
const App = () => {
  return (
  
    <div className="app">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todos" element={<Todos />} />
        <Route path="/" element={<Login />} />
        </Routes>
      </div>

  );
}

export default App;












































































