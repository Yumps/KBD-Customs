import React, { Component } from "react";
import { Navbar, Nav, Col} from "reactstrap";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar color="primary" light expand="md">
          <Nav className="ml-auto">
            <Link className="text-light" to="/">Home</Link>
            <Col>
              <Link className="text-light" to="/my-builds">My Builds</Link>
            </Col>
            <Link className="text-light" to="/shared-builds">Build Guides</Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
