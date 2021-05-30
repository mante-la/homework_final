import React from "react";

class FilterDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1Type: "text",
      input2Type: "text",
      startDate: new Date(2000, 0, 1),
      endDate: new Date(2200, 11, 31),
      startValue: "",
      endValue: "",
    };
    this.handleOnFocus1 = this.handleOnFocus1.bind(this);
    this.handleOnFocus2 = this.handleOnFocus2.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  handleOnFocus1() {
    this.setState({ input1Type: "date" });
  }
  handleOnFocus2() {
    this.setState({ input2Type: "date" });
  }
  handleChangeStart({ target }) {
    this.setState({
      startDate: target.value,
      startValue: target.value,
    });
  }
  handleChangeEnd({ target }) {
    this.setState({
      endDate: target.value,
      endValue: target.value,
    });
  }
  handleClick() {
    let start = this.state.startDate;
    let end = this.state.endDate;
    this.props.handleInput(start, end);
  }
  handleKeyPress(e) {
    if (e.charCode === 13) {
      this.handleClick();
    }
  }
  handleClear() {
    let start = new Date(2000, 0, 1);
    let end = new Date(2200, 11, 31);
    this.props.handleInput(start, end);
    this.setState({
      startValue: "",
      endValue: "",
      startDate: new Date(2000, 0, 1),
      endDate: new Date(2200, 11, 31),
    });
  }
  render() {
    return (
      <div>
        <input
          className="date date-first"
          type={this.state.input1Type}
          placeholder="Start date"
          value={this.state.startValue}
          onFocus={this.handleOnFocus1}
          onChange={this.handleChangeStart}
          onKeyPress={this.handleKeyPress}
        />
        <input
          className="date"
          type={this.state.input2Type}
          placeholder="End date"
          value={this.state.endValue}
          onFocus={this.handleOnFocus2}
          onChange={this.handleChangeEnd}
          onKeyPress={this.handleKeyPress}
          min={this.state.startDate}
        />
        <button onClick={this.handleClick} className="date-btn">
          Filter
        </button>
        <button onClick={this.handleClear} className="clear-btn">
          Clear
        </button>
      </div>
    );
  }
}

export default FilterDate;
