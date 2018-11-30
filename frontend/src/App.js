import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Typography from '@material-ui/core/Typography';
import Navbar from './components/Navbar';

const App = () => (
  <Typography color="inherit">
    <Navbar />
    <div class="container">
      <Main />
    </div>
  </Typography>
)

export default App;
