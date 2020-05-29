import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import PostPage from './components/PostPage';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/post" exact component={PostPage} />
      </Router>
    );
  }
}

export default App;
