import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  Routes, Route, } from "react-router-dom";
import Login from './components/Login/Login';
import Profile from './components/Profile';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/profile" element={<Profile/>} />
</Routes>
  );
}

export default App;
