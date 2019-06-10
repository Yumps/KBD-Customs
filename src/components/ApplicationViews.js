import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";

import Home from "./Home/Home";
import Builds from "./My Builds/myBuilds";
import KeyboardManager from "../modules/KeyboardManager";

class ApplicationViews extends Component {
  state = {
    build: []
  };

  deleteBuild = (id) =>
    KeyboardManager.delete("build", id)
      .then(KeyboardManager.getAll)
      .then(builds => {
        this.setState({ build: builds });
      });

  componentDidMount() {
    KeyboardManager.getAll("build").then(allBuilds => {
      this.setState({
        build: allBuilds
      });
    });
  }

  render() {
    return (
      <>
        <Route
          exact
          path="/"
          render={() => {
            return <Home />;
          }}
        />
        <Route
          path="/my-builds"
          render={props => {
            return (
              <Builds
                {...props}
                build={this.state.build}
                deleteBuild={this.deleteBuild}
              />
            );
          }}
        />
      </>
    );
  }
}

export default withRouter(ApplicationViews);
