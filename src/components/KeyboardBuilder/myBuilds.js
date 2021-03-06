import React, { Component } from "react";
import { Card, CardHeader, CardText, Button, CardBody, Col } from "reactstrap";

class Builds extends Component {
  render() {
    return (
      <div>
        <br />
        <div className="d-flex justify-content-center">
          <Button
            size="lg"
            color="success"
            onClick={() => {
              this.props.history.push(`/my-builds/add-build`);
            }}
          >
            Create a Build
          </Button>
        </div>
        <br />
        <div className="d-flex flex-wrap justify-content-center">
          {this.props.build
            .filter(item => item.userId === sessionStorage.getItem("User"))
            .map(build => (
              <Col sm="4" key={build.id}>
                <Card outline color="dark">
                  <CardHeader>{build.name}</CardHeader>
                  <CardBody>
                    <div className="d-flex flex-row">
                      <CardText className="p-2">
                        Case:
                        <li>
                          <strong>Name</strong>: {build.case.name}
                        </li>
                        <li>
                          <strong>Size</strong>: {build.case.size}
                        </li>
                        <li>
                          <strong>Shop</strong>:{" "}
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={build.case.shop_url}
                          >
                            Buy it here
                          </a>
                        </li>
                        <li>
                          <strong>Price</strong>: ${build.case.price}
                        </li>
                      </CardText>
                      <CardText className="p-2">
                        PCB:
                        <li>
                          <strong>Name</strong>: {build.pcb.name}
                        </li>
                        <li>
                          <strong>Size</strong>: {build.pcb.size}
                        </li>
                        <li>
                          <strong>Shop</strong>:{" "}
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={build.pcb.shop_url}
                          >
                            Buy it here
                          </a>
                        </li>
                        <li>
                          <strong>Price</strong>: ${build.pcb.price}
                        </li>
                      </CardText>
                    </div>
                    <div className="d-flex flex-row">
                      <CardText className="p-2">
                        Key Switch:
                        <li>
                          <strong>Name</strong>: {build.keyswitch.name}
                        </li>
                        <li>
                          <strong>Type</strong>: {build.keyswitch.type}
                        </li>
                        <li>
                          <strong>Shop</strong>:{" "}
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={build.keyswitch.shop_url}
                          >
                            Buy it here
                          </a>
                        </li>
                        <li>
                          <strong>Price</strong>: ${build.keyswitch.price}
                        </li>
                      </CardText>
                      <CardText className="p-2">
                        Key Caps:
                        <li>
                          <strong>Name</strong>: {build.keycap.name}
                        </li>
                        <li>
                          <strong>Shop</strong>:{" "}
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={build.keycap.shop_url}
                          >
                            Buy it here
                          </a>
                        </li>
                        <li>
                          <strong>Price</strong>: ${build.keycap.price}
                        </li>
                      </CardText>
                    </div>
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
                    <br />
                    <div className="d-flex justify-content-around">
                      <Button
                        outline
                        color="danger"
                        onClick={() => this.props.deleteBuild(build.id)}
                      >
                        Delete
                      </Button>{" "}
                      <Button
                        outline
                        color="primary"
                        onClick={() => {
                          this.props.history.push(
                            `/my-builds/${build.id}/edit`
                          );
                        }}
                      >
                        Edit
                      </Button>
                    </div>
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

export default Builds;
