import React from "react";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleChange({ target }) {
    this.setState({
      searchInput: target.value,
    });
  }
  handleClick() {
    let input = this.state.searchInput;
    this.props.handleInput(input);
  }
  handleKeyPress(e) {
    if (e.charCode === 13) {
      this.handleClick();
    }
  }
  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          className="search-box"
          type="text"
          placeholder="Enter name"
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick} className="search-btn">
          Search
        </button>
      </div>
    );
  }
}

export default SearchBox;
