import React from "react";
import CampaignsTable from "./CampaignsTable";
import FilterDate from "./FilterDate";
import SearchBox from "./SearchBox";

export default class CampaignsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: null,
      startDate: new Date(2000, 0, 1),
      endDate: new Date(2200, 11, 31),
    };
    this.handleInputName = this.handleInputName.bind(this);
    this.handleInputDate = this.handleInputDate.bind(this);
  }
  handleInputName(input) {
    this.setState({
      searchInput: input,
    });
  }
  handleInputDate(start, end) {
    this.setState({
      startDate: start,
      endDate: end,
    });
  }

  render() {
    return (
      <div>
        <div className="filter-div">
          <FilterDate handleInput={this.handleInputDate} />
          <SearchBox handleInput={this.handleInputName} />
        </div>
        <CampaignsTable
          searchInput={this.state.searchInput}
          startInput={this.state.startDate}
          endInput={this.state.endDate}
        />
      </div>
    );
  }
}
