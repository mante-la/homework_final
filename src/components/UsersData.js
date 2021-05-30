import React from "react";

export default class UsersData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
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
}
