import React, { Component } from "react";
import {
  Form,
  Label,
  Input,
  FormGroup,
  Button,
  Card,
  CardBody,
  Col
} from "reactstrap";

class Register extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  userRegister = evt => {
    evt.preventDefault();
    this.props.getAll().then(allUsers => {
      let usersArray = allUsers.filter(user => {
        return user.email === this.state.email;
      });
      if (usersArray.length > 0) {
        alert("User has already been registered with this E-mail.");
      } else {
        const newUser = {
          email: this.state.email,
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName
        };
        this.props.addUser(newUser);
        this.props.history.push("/login");
      }
    });
  };

  render() {
    return (
      <div>
        <br/>
          <h1 className="text-center">Register!</h1>
        <Col sm="8" md={{ offset: 2 }}>
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label>Email:</Label>
                  <Input
                    type="text"
                    required
                    onChange={this.handleFieldChange}
                    value={this.state.email}
                    id="email"
                    placeholder="example@example.com"
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Password:</Label>
                  <Input
                    type="text"
                    required
                    onChange={this.handleFieldChange}
                    value={this.state.password}
                    id="password"
                    placeholder="password"
                  />
                </FormGroup>

                <FormGroup>
                  <Label>First Name:</Label>
                  <Input
                    type="text"
                    required
                    onChange={this.handleFieldChange}
                    value={this.state.firstName}
                    id="firstName"
                    placeholder="John"
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Last Name:</Label>
                  <Input
                    type="text"
                    required
                    onChange={this.handleFieldChange}
                    value={this.state.lastName}
                    id="lastName"
                    placeholder="Doe"
                  />
                </FormGroup>
                <Button color="primary" onClick={this.userRegister}>
                  Register
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default Register;
