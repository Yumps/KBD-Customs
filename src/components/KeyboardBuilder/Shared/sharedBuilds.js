import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  Col,
  Button,
  Row
} from "reactstrap";

class SharedBuilds extends Component {
  render() {
    return (
      <div>
        <br />
        <h1 className="text-center">Shared Builds</h1>
        <br />
        <div className="d-flex flex-wrap justify-content-center">
          {this.props.build
            .filter(item => item.public === true)
            .map(build => (
              <Col sm="3" key={build.id}>
                <Card outline color="dark">
                  <CardHeader>{build.name}</CardHeader>
                  <CardBody>
                    <CardText>
                      <li>{build.case.name}</li>
                      <li>{build.pcb.name}</li>
                      <li>{build.keyswitch.name}</li>
                      <li>{build.keycap.name}</li>
                      <br />
                      <Button
                        size="sm"
                        outline
                        color="primary"
                        onClick={() => {
                          this.props.history.push(`/shared-builds/${build.id}`);
                        }}
                      >
                        Details
                      </Button>
                    </CardText>
                    <div>
                      <CardText>
                        Total Estimate:{" "}
                        <strong>
                          $
                          {parseInt(build.case.price) +
                            parseInt(build.pcb.price) +
                            parseInt(build.keyswitch.price) +
                            parseInt(build.keycap.price)}
                        </strong>
                      </CardText>
                    </div>
                    <p>
                      Created by:{" "}
                      <strong>
                        {build.user.firstName} {build.user.lastName}
                      </strong>
                    </p>
                  </CardBody>
                </Card>
                <br />
              </Col>
            ))}
        </div>
      </div>
    );
  }
}

export default SharedBuilds;
