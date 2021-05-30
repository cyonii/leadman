import React, { Component, Fragment } from 'react';
import Header from './components/layout/Header';
import Dashboard from './components/leads/Dashboard';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Dashboard />
      </Fragment>
    );
  }
}

export default App;
