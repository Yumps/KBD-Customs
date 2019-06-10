import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardText,
  Button,
  CardBody,
  Col,
  CardDeck
} from "reactstrap";

class Builds extends Component {
  render() {
    return (
      <div>
        <br />
        <CardDeck>
        {this.props.build.map(build => (
          <Col key={build.id}>
              <Card>
                <CardHeader>{build.name}</CardHeader>
                <CardBody>
                  <CardText>
                    Case: {build.case.name}
                    <br />
                    PCB: {build.pcbId}
                    <br />
                    Key Switch: {build.keyswitchId}
                    <br />
                    Key Caps: {build.keycapId}
                  </CardText>
                  <Button outline color="danger">
                    Delete
                  </Button>{" "}
                  <Button outline color="primary">
                    Edit
                  </Button>
                </CardBody>
              </Card>
              <br />
          </Col>
        ))}
        </CardDeck>
      </div>
    );
  }
}

export default Builds;
