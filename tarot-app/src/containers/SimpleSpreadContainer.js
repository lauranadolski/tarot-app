import React from "react";
import TarotCard from '../components/TarotCard';


// let i = 0;
let randomNumber = 0;
let randomCard = '';
// let cardInt = 0;
let helperNumberArray = [];
let i = 0;

class SimpleSpreadContainer extends React.Component {

  // 1. generate array of random numbers
  // 2. map over array of random nubers, using the random number to grab from the index and produce a <Tarot Card />

  // generateRandomNumberArray = (numberOfCards) => {
  //   for (i = 0; i < cardInt; i++) {
  //     helperNumberArray.push(Math.floor((Math.random() * (parseInt(this.props.cards.length) - 1)) + 0))
  //   }
  //   return helperNumberArray;
  // }

    // generateRandomTarotCards = (numberOfCards) => {
    //   console.log("hey, i'm in the generate random tarot cards function")
    //   let cardInt = 0;
    //   let i = 0;
    //   for (i = 0; i < cardInt; i++) {
    //     console.log("hey")
    //     return (helperNumberArray.push(Math.floor((Math.random() * (parseInt(this.props.cards.length) - 1)) + 0)))
    //   }
    //   helperNumberArray.map((number) => {
    //     return <TarotCard card={this.props.cards[number]} />
    //   })
    //
    // }

    spreadGenerator = (numberOfCards) => {
      let moreHelp = [];
      let helperArray = [];
      // debugger;
      for(i = 0; i < numberOfCards; i++) {
        moreHelp.push(Math.floor((Math.random() * (parseInt(this.props.cards.length) - 1)) + 0))
      }

        return this.createTarotCardArray(moreHelp)

      // moreHelp.map((number) => {
      //   debugger;
      //   return (<TarotCard card={this.props.cards[number]} key={number} />)
      // })

    }

    createTarotCardArray = (array) => {

      console.log("i am before map", this.props.cards)

    return array.map((number) => {
              console.log("i am in the map", this.props.cards[number])
        return <TarotCard cardData={this.props.cards[number]} key={number} />
      })

    }

      // <TarotCard cardData={this.props.cards[0]}/>


  // generateRandomTarotCard = () => {
  //   randomNumber = Math.floor((Math.random() * (parseInt(this.props.cards.length) - 1)) + 0);
  //   randomCard = this.props.cards[randomNumber];
  //   console.log("i am random card total data:", randomCard)
  //   return (<TarotCard cardData={randomCard} />);
  // }
  //
  // generateSelectedNumberOfRandomCards = (numberOfCards) => {
  //
  //   randomNumber = Math.floor((Math.random() * (parseInt(this.props.cards.length) - 1)) + 0);
  //
  //   cardInt = parseInt(numberOfCards);
  //
  //   for (i = 0; i < cardInt; i++) {
  //     helperArray.push(this.props.cards[Math.floor((Math.random() * (parseInt(this.props.cards.length) - 1)) + 0)]);
  //   }
  //
  //   cardInt = parseInt(numberOfCards);
  //   console.log("i yam here dis le card Int", cardInt)
  //   for (i = 0; i < cardInt; i++) {
  //     console.log("i'm in a loop iteration");
  //     this.generateRandomTarotCard());
  //   }
  // }

  render() {
    console.log("hey, i'm in the simple spread container")
    return (
      <div>
      {this.spreadGenerator(this.props.numberOfCards)}
      </div>
    );
  }
};

export default SimpleSpreadContainer;
