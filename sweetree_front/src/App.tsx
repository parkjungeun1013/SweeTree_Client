import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import LoginPage from 'src/pages/LoginPage/LoginPage';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      
    </Routes>
  );
}

export default App;
