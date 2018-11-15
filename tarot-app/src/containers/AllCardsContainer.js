import React from "react";
import TarotCard from '../components/TarotCard';
import SearchBar from '../components/SearchBar';

class AllCardsContainer extends React.Component {

  state = {
    cards: this.props.cards,
    filteredCards: [],
  }

  currentSearchedCards = (currentSearchTerm) => {
    let filteredCards = this.state.cards
    filteredCards = filteredCards.filter((card) => {
      return card.name.toLowerCase().includes(currentSearchTerm.toLowerCase())
    });

    this.setState({
      filteredCards: filteredCards
    })
    }


  // searchHandler = (searchValue) => {
  //   let filteredSongs = this.state.songs
  //   filteredSongs = filteredSongs.filter((song) => {
  //     return song.title.toLowerCase().includes(searchValue.currentSearchTerm.toLowerCase())
  //   })

  createAllCards = () => {
    if (this.state.filteredCards.length < 1) {
    return this.props.cards.map((card) => {
      return (<TarotCard key={card.number} cardData={card} />)
    })
  } else {
    return this.state.filteredCards.map((card) => {
      return (<TarotCard key={card.number} cardData={card} />)
    })
  }
  }

  render() {
    return (
      <div>
      <SearchBar grabSearchedValue={this.currentSearchedCards} />
      {this.createAllCards()}
      </div>
    );
  }
};

export default AllCardsContainer;
