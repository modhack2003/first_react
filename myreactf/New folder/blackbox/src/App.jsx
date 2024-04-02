import React, { Component } from 'react';
import './App.css';
import MagicBall from './MagicBall';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>🎱 Magic 8 Ball 🎱</h1>
          <MagicBall />
        </header>
      </div>
    );
  }
}

export default App;