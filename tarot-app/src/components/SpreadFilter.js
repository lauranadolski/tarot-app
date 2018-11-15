import React from "react";

class SpreadFilter extends React.Component {
  state = {
    SelectedSpread: '',
  }

  // <img src='{this.props.cardData.imgURL}' alt="" />

  handleChange = (event) => {
    this.setState({
      SelectedSpread: event.target.value
    }, () => {
      console.log(this.state.SelectedSpread)
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.toggleBool();
    this.props.grabSpread(this.state.SelectedSpread);
  }

  render() {
    return (
      <div>

      <form onSubmit={this.handleSubmit}>
        <label>
          Please select your spread:
          <select value={this.state.SelectedSpread} onChange={this.handleChange}>
            <option selected value="0" >-Spreads-</option>
            <option value="1" >Single Card Spread</option>
            <option value="3">Three Card Spread</option>
            <option value="5">Five Card Spread</option>
          </select>
        </label>
        <input type="submit" value="Go"/>
      </form>

      </div>

    );
  }
};

export default SpreadFilter;
