import React, { Component } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavlbar.js';
import ShoppingList from './components/ShoppingList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
