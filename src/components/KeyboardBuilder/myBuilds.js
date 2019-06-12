import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardText,
  Button,
  CardBody
} from "reactstrap";
import { Link } from "react-router-dom";

class Builds extends Component {
  render() {
    return (
      <div>
        <br />
        <Button
          outline
          color="success"
          onClick={() => {
            this.props.history.push(`/my-builds/add-build`);
          }}
        >
          Add Build
        </Button>

        <br />

        {this.props.build.map(build => (
          <Card key={build.id}>
            <CardHeader>{build.name}</CardHeader>
            <CardBody>
              <CardText>
                Case:
                <li>
                  <strong>Name</strong>: {build.case.name}
                </li>
                <li>
                  <strong>Size</strong>: {build.case.size}
                </li>
                <li>
                  <strong>Shop</strong>:{" "}
                  <Link to="{build.case.shop_url}">Buy it here</Link>
                </li>
                <li>
                  <strong>Price</strong>: {build.case.price}
                </li>
              </CardText>
              <CardText>
                PCB:
                <li>
                  <strong>Name</strong>: {build.pcb.name}
                </li>
                <li>
                  <strong>Size</strong>: {build.pcb.size}
                </li>
                <li>
                  <strong>Shop</strong>:{" "}
                  <a href="{build.pcb.shop_url}">Buy it here</a>
                </li>
                <li><strong>Price</strong>: {build.pcb.price}</li>
              </CardText>
              <CardText>
                Key Switch:
                <li>
                  <strong>Name</strong>: {build.keyswitch.name}
                </li>
                <li>
                  <strong>Type</strong>: {build.keyswitch.type}
                </li>
                <li>
                  <strong>Shop</strong>:{" "}
                  <a href="{build.keyswitch.shop_url}">Buy it here</a>
                </li>
                <li>
                  <strong>Price</strong>: {build.keyswitch.price}
                </li>
              </CardText>
              <CardText>
                Key Caps:
                <li>
                  <strong>Name</strong>: {build.keycap.name}
                </li>
                <li>
                  <strong>Price</strong>: {build.keycap.price}
                </li>
              </CardText>
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
                  this.props.history.push(`/my-builds/${build.id}/edit`);
                }}
              >
                Edit
              </Button>{" "}
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}

export default Builds;
