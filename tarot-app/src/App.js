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

  // This function accepts a nested object as input. It then runs through each nested item within said object to flatten it out, extracting all arrays from it and returning a single array with the flattened contents.
  flattenData = (targetObject) => {

    // Grab the keys from the target object, and iterate through each of them.
    Object.keys(targetObject).map( (nestedKey) => {

      // If the value of the currently iterated upon key is an array, then iterate over the items in said array and push their values into the helper array.
      if (Array.isArray(targetObject[nestedKey])) {
        targetObject[nestedKey].map( (arrayThingie) => {
          helperArray.push(arrayThingie);
        })
      } 
    
      // Otherwise, if the value of the currently iterated upon key is an object, then recursively call this function again with that object as the new argument.
      else if (typeof(targetObject[nestedKey]) === "object") {
        this.flattenData(targetObject[nestedKey]);
      }
    });

    // When all is said and done, return the helper array which contains the flattened-out contents.
  return helperArray;
  }

  // When the component mounts, flatten the data from the nested object in state to the flattened array needed to then in turn display the data on the page.
  componentDidMount() {
    this.setState({
      allCardsFlattenedArray: this.flattenData(this.state.allCardsNestedData)
    })
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
              <button><Link to="/">Home</Link></button>
              <button><Link to="/allcards">View All Cards</Link></button>
              <button><Link to="/about">About</Link></button>
              </div>
            </div>
          </h1>
        </header>


        <Route
          exact path="/"
          render={(routeProps) => (
            <HomePageContainer {...routeProps}
            cards={this.state.allCardsFlattenedArray}
             />
          )}
        />

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
