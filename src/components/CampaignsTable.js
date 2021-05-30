import React from "react";
import CampaignData from "./CampaignData";

class CampaignsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
    this.handleFetch = this.handleFetch.bind(this);
  }
  handleFetch() {
    this.setState({ isLoaded: true });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>User Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Active</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            <tr className="loading">
              {!this.state.isLoaded ? "Loading..." : ""}
            </tr>
          </tbody>
          <CampaignData
            searchInput={this.props.searchInput}
            startInput={this.props.startInput}
            endInput={this.props.endInput}
            handleFetch={this.handleFetch}
          />
        </table>
      </div>
    );
  }
}

export default CampaignsTable;
