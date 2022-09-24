import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  Routes, Route, } from "react-router-dom";
import Login from './components/Authenticate/Login/Login';
import Profile from './components/Profile';
import Register from './components/Authenticate/Register/Register';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/profile" element={<Profile/>} />
</Routes>
  );
}

export default App;
