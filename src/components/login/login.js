import React, { Component } from "react";
import {
  Form,
  Label,
  Input,
  FormGroup,
  Button,
  Col,
  Card,
  CardBody
} from "reactstrap";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  onLogin = evt => {
    evt.preventDefault();
    this.props.login(this.state.email, this.state.password).then(allUsers => {
      if (allUsers.length < 1) {
        alert("No user found");
      } else {
        allUsers.forEach(user => {
          let loggedIn = false;
          if (
            this.state.email === user.email &&
            this.state.password === user.password
          ) {
            loggedIn = true;
          }
          if (loggedIn === true) {
            sessionStorage.setItem("User", user.id);
            sessionStorage.setItem(
              "Fullname",
              `${user.firstName} ${user.lastName}`
            );
            this.props.populateAppState();
            this.props.history.push("/");
          }
        });
      }
    });
  };

  componentDidMount() {
    if (sessionStorage.getItem("User") !== null) {
      sessionStorage.removeItem("User");
    }
  }

  render() {
    return (
      <div>
        <br />
        <Col md={{ size: 3, offset: 5 }}>
          <Card>
            <CardBody>
        <h1 className="text-center">Welcome!</h1>
              <Form>
                <FormGroup>
                  <Label>Email:</Label>
                  <Input
                    type="text"
                    required
                    onChange={this.handleFieldChange}
                    id="email"
                    placeholder="example@example.com"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Password:</Label>
                  <Input
                    type="password"
                    required
                    onChange={this.handleFieldChange}
                    id="password"
                    placeholder="password"
                  />
                </FormGroup>
                <div className="d-flex justify-content-around">
                  <Button color="success" onClick={this.onLogin}>
                    Login
                  </Button>{" "}
                  <Button
                    color="primary"
                    onClick={() => this.props.history.push("/register")}
                  >
                    Register
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default Login;
