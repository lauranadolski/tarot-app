import React from "react";
import TarotCard from '../components/TarotCard';

class AllCardsContainer extends React.Component {

  createAllCards = () => {
    return this.props.cards.map((card) => {
      return (<TarotCard key={card.number} cardData={card} />)
    })
  }

  render() {
    return (
      <div>
      {this.createAllCards()}
      </div>
    );
  }
};

export default AllCardsContainer;
