import React, { Component } from "react";
import { Card, CardHeader, CardText, CardBody, Col } from "reactstrap";

class SharedBuilds extends Component {
  render() {
    return (
      <div>
        <br />
        {this.props.build
          .filter(item => item.public === true)
          .map(build => (
            <Col sm="9" md={{ offset: 2 }} key={build.id}>
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
                        <a href={build.case.shop_url}>Buy it here</a>
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
                        <a href={build.pcb.shop_url}>Buy it here</a>
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
                        <a href={build.keyswitch.shop_url}>Buy it here</a>
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
                        <a href={build.keycap.shop_url}>Buy it here</a>
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
    );
  }
}

export default SharedBuilds;
