import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Post from './components/Post/Post'


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
  
        <Auth/>
     
      </div>
    );
  }
}

export default App;
