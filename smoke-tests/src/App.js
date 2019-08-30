import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Messages name='Messages' unread={0} />
        <Messages name='Notifications' unread={10} />
        <h1>Smooooooke</h1>
        <div>Smokey</div>
      </div>
    );
  }
}

export default App;
