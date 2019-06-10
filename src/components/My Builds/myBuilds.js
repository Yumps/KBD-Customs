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
                    Case:
                    <br />
                    {build.case.name}
                  </CardText>
                   <CardText>
                    PCB:
                    <br />
                    {build.pcb.name}
                    </CardText>
                    <CardText>
                    Key Switch:
                    <br />
                    {build.keyswitch.name}
                    </CardText>
                    <CardText>
                    Key Caps:
                    <br />
                    {build.keycap.name}
                    </CardText>
                  <Button
                    outline
                    color="danger"
                    onClick={() => this.props.deleteBuild(build.id)}
                  >
                    Delete
                  </Button>{" "}
                  <Button outline color="primary">
                    Edit
                  </Button>{" "}
                  <Button outline color="warning">
                    Details
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
