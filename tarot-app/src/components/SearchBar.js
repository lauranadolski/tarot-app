import React from "react";

class SearchBar extends React.Component {
  state = {
    currentSearchTerm:'',
  }

  handleChange = (event) => {
    this.setState({
      currentSearchTerm: event.target.value
    }, () => {
      this.props.grabSearchedValue(this.state.currentSearchTerm)
    })
  }

  render() {
    return (
      <input type="text" value={this.state.currentSearchTerm} onChange={this.handleChange}/>
      
    );
  }
};

export default SearchBar;
