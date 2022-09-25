import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  Routes, Route, } from "react-router-dom";
import Login from './components/Authenticate/Login/Login';
import Profile from './components/Profile';
import Register from './components/Authenticate/Register/Register';
import Navbar from './components/Navbar/Navbat';
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar/>
      
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/profile" element={<Profile/>} />
  </Routes>
  </ThemeProvider>
  );
}

export default App;
