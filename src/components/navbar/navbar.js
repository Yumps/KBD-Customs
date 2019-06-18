import React, { Component } from "react";
import { Navbar, Nav, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";
class NavBar extends Component {
  logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  userButton = () => {
    if (sessionStorage.getItem("User") !== null) {
      return (
        <Button className="text-light" onClick={this.logout}>
          Logout
        </Button>
      );
    } else {
      return (
        <Link className="text-light" to="/login">
          Login
        </Link>
      );
    }
  };
  render() {
    return (
      <div>
        <Navbar color="primary" light expand="md">
          <Nav className="ml-auto">
            <Link className="text-light" to="/">
              Home
            </Link>
            <Col ></Col>
            <Link className="text-light" to="/my-builds">
              My Builds
            </Link>
            <Col ></Col>
            <Link className="text-light" to="/shared-builds">
              Build Guides
            </Link>
            <Col ></Col>
            {this.userButton()}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
