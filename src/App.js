import React, { Component } from 'react';
import logo from './logo.svg';
import { Carousel  } from 'antd';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Carousel autoplay>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </header>
      </div>
    );
  }
}

export default App;
