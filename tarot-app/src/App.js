import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import cards from './tarot_data';

import AllCardsContainer from './containers/AllCardsContainer';
import AboutPageContainer from './containers/AboutPageContainer';
import HomePageContainer from './containers/HomePageContainer';


let helperArray = [];

class App extends Component {

  state = {
    allCardsNestedData: cards,
    allCardsFlattenedArray: [],
  }

  flattenData = (targetObject) => {
    Object.keys(targetObject).map( (nestedKey) => {
      if (Array.isArray(targetObject[nestedKey])) {
        targetObject[nestedKey].map( (arrayThingie) => {
          helperArray.push(arrayThingie);
        })
      } else if (typeof(targetObject[nestedKey]) === "object") {
        this.flattenData(targetObject[nestedKey]);
      }
    });
  return helperArray;
  }

  componentDidMount() {
    this.setState({
      allCardsFlattenedArray: this.flattenData(this.state.allCardsNestedData)
    })
  }

//         <Route path="/allcards" component={AllCardsContainer} />

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

        <Route
          path="/allcards"
          render={(routeProps) => (
          <AllCardsContainer {...routeProps} cards={this.state.allCardsFlattenedArray}/>
          )}
        />

        <Route path="/about" component={AboutPageContainer} />

      </div>
      </Router>
    );
  }
}

export default App;
