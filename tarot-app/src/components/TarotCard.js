import React from "react";

class TarotCard extends React.Component {


  // <img src='{this.props.cardData.imgURL}' alt="" />

  render() {
    return (
      <div>
        <img className="Tarot-Card-Img" src={this.props.cardData.imgURL} alt="" />
        <br />
        {this.props.cardData.name}
        <br />
      </div>
    );
  }
};

export default TarotCard;
