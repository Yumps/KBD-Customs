import React, { Component } from "react";
import NavBar from "./navbar/navbar";
import ApplicationViews from "./ApplicationViews";
import KeyboardManager from "../modules/KeyboardManager";

class App extends Component {
  constructor(props) {
    super(props);
    this.populateAppState = this.populateAppState.bind(this);
  }

  populateAppState() {
    KeyboardManager.getAll("users").then(user => {
      this.setState({ users: user });
    });
  }

  componentDidMount() {
    this.populateAppState();
  }
  login = (username, password, firstName) => {
    return KeyboardManager.login(username, password, firstName);
  };

  getAllUsers = () => {
    return KeyboardManager.getAll("users");
  };

  addUser = user => {
    return KeyboardManager.post("users", user)
      .then(() => this.populateAppState())
      .then(() => this.login(user.username, user.password));
  };

  render() {
    return (
      <>
        <NavBar/>
        <ApplicationViews
          populateAppState={this.populateAppState}
          login={this.login}
          getAllUsers={this.getAllUsers}
          addUser={this.addUser}
        />
      </>
    );
  }
}

export default App;
