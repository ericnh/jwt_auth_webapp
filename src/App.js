import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import CatsPage from './components/CatsPage'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/cats" component={ CatsPage } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
