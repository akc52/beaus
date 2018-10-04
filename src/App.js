import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Beau's</h1>
          <p>
            Since 2006 Beau’s All Natural has been brewing interesting, tasty beers like our Lug Tread Lagered Ale using the best ingredients & local spring water. Our family takes pride in creating unique, wonderful and certified organic craft beer, conceived with honest consideration for the environment and our local communities, and delivered with a sense of friendly relationship. We are an award-winning, local, family-run, organic, and independent brewery.
          </p>
          <a
            className="App-link"
            href="https://beaus.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Beau's
          </a>
        </header>
      </div>
    );
  }
}

export default App;
