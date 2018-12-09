import React, { Component } from 'react';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default App;
