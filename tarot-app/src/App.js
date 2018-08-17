import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import cards from './tarot_data';

import AllCardsContainer from './containers/AllCardsContainer';
import AboutPageContainer from './containers/AboutPageContainer';
import HomePageContainer from './containers/HomePageContainer';

class App extends Component {

  state= {
    allCards: cards
  }

  grabAllCards = () => {

  }


  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <div className="App-navigation">
              <div className="Align-left">Tarot App </div>
              <div className="Align-right">
              <button><Link to="/">New Spread</Link></button>
              <button><Link to="/allcards">View All Cards</Link></button>
              <button><Link to="/about">About</Link></button>
              </div>
            </div>
          </h1>
        </header>


        <Route exact path="/" component={HomePageContainer} />
        <Route path="/allcards" component={AllCardsContainer} />
        <Route path="/about" component={AboutPageContainer} />

      </div>
      </Router>
    );
  }
}

export default App;
