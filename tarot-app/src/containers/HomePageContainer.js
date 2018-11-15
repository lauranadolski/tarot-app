import React from "react";
import SpreadFilter from '../components/SpreadFilter';
import SimpleSpreadContainer from './SimpleSpreadContainer';

class HomePageContainer extends React.Component {

  state = {
    SpreadSelectedBoolean: false,
    SpreadSelectedType: 0,
  }

  // componentDidMount() {
  //   console.log("hey i'm in the component did mount")
  //   this.setState({
  //     SpreadSelectedBoolean: false
  //   })
  // }

  toggleSpreadSelectedBoolean = () => {
    let currentBool = this.state.SpreadSelectedBoolean
    this.setState({
      SpreadSelectedBoolean: !currentBool
    })
  }

  grabSelectedSpread = (selectedSpread) => {
    this.setState({
      SpreadSelectedType: parseInt(selectedSpread)
    })
  }

  // setSpreadSelectedToFalse = () => {
  //   this.setState({
  //     SpreadSelectedBoolean: false
  //   })
  // }

  handleClick = () => {
    this.setState({
      SpreadSelectedBoolean: false
    })
  }

  render() {
    console.log("i am being re-rendered and i am a homepage yay here's my state", this.state.SpreadSelectedBoolean)
    // console.log("here my props cards", this.props.cards)
    return (
      <div>
      <button onClick={this.handleClick}>New Spread</button>
      {this.state.SpreadSelectedBoolean ?
        (<SimpleSpreadContainer
          numberOfCards={this.state.SpreadSelectedType} cards={this.props.cards}
          />) :
        (<SpreadFilter
          toggleBool = {this.toggleSpreadSelectedBoolean}
          grabSpread = {this.grabSelectedSpread}
          setSpreadSelectedToFalse = {this.setSpreadSelectedToFalse}
          />)
        }
      </div>
    );
  }
};

export default HomePageContainer;
