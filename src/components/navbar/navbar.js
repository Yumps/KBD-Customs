import React, { Component } from "react";
import { Navbar, Nav, Col } from "reactstrap";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="ml-auto">
            <Link to="/home">Home</Link>
            <Col>
              <Link to="/my-builds">My Builds</Link>
            </Col>
            <Link to="/shared-builds">Build Guides</Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
