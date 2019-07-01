import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Redirect } from "react-router-dom";

import Home from "./Home/Home";
import Builds from "./KeyboardBuilder/myBuilds";
import KeyboardManager from "../modules/KeyboardManager";
import BuildForm from "./KeyboardBuilder/buildForm";
import EditBuild from "./KeyboardBuilder/editBuilds";
import Login from "./login/login";
import Register from "./login/register";
import SharedBuilds from "./KeyboardBuilder/Shared/sharedBuilds";
// import SharedDetails from "./KeyboardBuilder/sharedDetails"
class ApplicationViews extends Component {
  state = {
    build: [],
    case: [],
    pcb: [],
    keyswitch: [],
    keycap: []
  };

  deleteBuild = id =>
    KeyboardManager.delete(id)
      .then(KeyboardManager.getAllBuilds)
      .then(builds => {
        this.setState({ build: builds });
      });

  addBuild = newBuild =>
    KeyboardManager.post("build", newBuild)
      .then(KeyboardManager.getAllBuilds)
      .then(builds =>
        this.setState({
          build: builds
        })
      );

  updateBuild = patch =>
    KeyboardManager.edit("build", patch)
      .then(KeyboardManager.getAllBuilds)
      .then(editedBuild => {
        this.props.history.push("/my-builds");
        this.setState({ build: editedBuild });
      });

  isAuthenticated = () => sessionStorage.getItem("User") !== null;

  componentDidMount() {
    KeyboardManager.getAllBuilds().then(allBuilds => {
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
          exact
          path="/my-builds"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <Builds
                  {...props}
                  build={this.state.build}
                  deleteBuild={this.deleteBuild}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        <Route
          path="/my-builds/add-build"
          render={props => {
            if (this.isAuthenticated()) {
              return <BuildForm {...props} addBuild={this.addBuild} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        <Route
          path="/my-builds/:buildId(\d+)/edit"
          render={props => {
            if (this.isAuthenticated()) {
              return  <EditBuild {...props} updateBuild={this.updateBuild} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        <Route
          path="/shared-builds"
          render={props => {
            return <SharedBuilds {...props} build={this.state.build} />;
          }}
        />

        {/* <Route 
        path="/shared-builds/:buildId(\d+)"
        render={(props) => {
          let build = this.state.build.find(build => build.id === parseInt(props.match.params.buildId)
          )
          if(!build) {
            build = {id: 404, name: "404", location: "Page not found"}
          }

          return(
            <SharedDetails 
            build={build}
            {...props}
            builds={this.state.build}
            />
          )
        }}
            /> */}

        <Route
          path="/register"
          render={props => {
            return (
              <Register
                {...props}
                addUser={this.props.addUser}
                users={this.props.users}
                login={this.props.login}
                getAll={this.props.getAllUsers}
              />
            );
          }}
        />

        <Route
          exact
          path="/login"
          render={props => {
            return (
              <Login
                {...props}
                populateAppState={this.props.populateAppState}
                login={this.props.login}
              />
            );
          }}
        />
      </>
    );
  }
}

export default withRouter(ApplicationViews);
