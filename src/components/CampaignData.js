import React from "react";

class CampaignData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      campaigns: [],
    };
    this.addCampaigns = this.addCampaigns.bind(this);
    window.addCampaigns = this.addCampaigns;
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          users: data,
        });
        this.props.handleFetch();
      });
  }

  addCampaigns(newCampaigns) {
    this.setState({
      campaigns: this.state.campaigns.concat(newCampaigns),
    });
  }

  render() {
    let { campaigns } = this.state;
    const today = new Date();
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    let input;
    if (this.props.searchInput !== null) {
      input =
        this.props.searchInput.charAt(0).toUpperCase() +
        this.props.searchInput.slice(1);
    }

    const convertDate = (dateFromInput) => {
      if (typeof dateFromInput === "string") {
        let inputToArray = dateFromInput.split("-");
        let convertedDate = new Date(
          inputToArray[0],
          inputToArray[1] - 1,
          inputToArray[2]
        );
        return convertedDate;
      } else {
        let convertedDate = dateFromInput;
        return convertedDate;
      }
    };
    const stringToDate = (date) => {
      let inputToArray = date.split("/");
      let convertedDate = new Date(
        inputToArray[2],
        inputToArray[0] - 1,
        inputToArray[1]
      );
      return convertedDate;
    };
    let start = convertDate(this.props.startInput);
    let end = convertDate(this.props.endInput);

    const findUserName = (campaignId) => {
      let userName = this.state.users.find((user) => user.id === campaignId);
      if (userName !== undefined) {
        return userName;
      } else {
        return "";
      }
    };

    return (
      <tbody>
        {this.state.users.length
          ? campaigns.map((campaign) =>
              start.getTime() - stringToDate(campaign.startDate).getTime() <=
                0 &&
              end.getTime() - stringToDate(campaign.endDate).getTime() >= 0 &&
              (input === campaign.name ||
                campaign.name.includes(input) ||
                input === undefined) ? (
                <tr
                  className={
                    stringToDate(campaign.startDate).getTime() -
                      today.getTime() <
                      0 &&
                    stringToDate(campaign.endDate).getTime() - today.getTime() >
                      0
                      ? "tr-active"
                      : "tr-inactive"
                  }
                >
                  <td className="campaignName">{campaign.name}</td>
                  <td className="userName">
                    {findUserName(campaign.userId) === ""
                      ? "User unknown"
                      : findUserName(campaign.userId).username}
                  </td>
                  <td className="startDate">
                    {stringToDate(campaign.startDate).toLocaleDateString(
                      "default",
                      dateOptions
                    )}
                  </td>
                  <td className="endDate">
                    {stringToDate(campaign.endDate).toLocaleDateString(
                      "default",
                      dateOptions
                    )}
                  </td>

                  <td className="status">
                    {stringToDate(campaign.startDate).getTime() -
                      today.getTime() <
                      0 &&
                    stringToDate(campaign.endDate).getTime() - today.getTime() >
                      0
                      ? "Active"
                      : "Inactive"}
                  </td>
                  <td className="budget">
                    {campaign.Budget.toLocaleString() + " USD"}
                  </td>
                </tr>
              ) : (
                ""
              )
            )
          : ""}
      </tbody>
    );
  }
}

export default CampaignData;
