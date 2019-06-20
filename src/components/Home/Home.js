import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardHeader,
  CardDeck,
  CardFooter,
  Jumbotron,
  CardBody,
  Col
} from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <br />
        <Col>
          <Jumbotron>
            <h3 className="display-4">KBD Customs</h3>
            <p className="lead">
              A React app to help provide easier resources and a keyboard
              builder to help manage your browser tabs.
            </p>
            <hr className="my-3" />
            <p>
              A lot of info for building custom keyboards is vague, so info can
              be difficult to understand. I have created an app to hopefully
              help clear up some information and make it easier to find the
              answers you need; as well as provide a builder, so that the user
              could create a keyboard using one tab rather than multiple on your
              browser.
            </p>
          </Jumbotron>
          <CardDeck>
            <Card outline color="success">
              <CardHeader>Example Build:</CardHeader>
              <CardBody>
                <CardImg
                  top
                  width="100%"
                  src="https://scontent.cdninstagram.com/vp/7b78f9692f424222277766d7de12a293/5D5C3CBD/t51.2885-15/sh0.08/e35/s640x640/55920922_130162721391280_5659293311161805016_n.jpg?_nc_ht=scontent.cdninstagram.com"
                  alt="Example Build"
                />
              </CardBody>
              <CardFooter />
            </Card>

            <Card outline color="warning">
              <CardHeader>Example Build:</CardHeader>
              <CardBody>
                <CardImg
                  top
                  width="100%"
                  src="https://scontent.cdninstagram.com/vp/bfb2f3d59a4ebbe551ca1445731b4c15/5D73EC22/t51.2885-15/sh0.08/e35/s640x640/58622832_170568840622116_8720189621198679276_n.jpg?_nc_ht=scontent.cdninstagram.com"
                  alt="Example Build"
                />
              </CardBody>
              <CardFooter />
            </Card>

            <Card outline color="primary">
              <CardHeader>Example Build:</CardHeader>
              <CardBody>
                <CardImg
                  top
                  width="100%"
                  src="https://scontent-lga3-1.cdninstagram.com/vp/aaecae62f9e85377ff5a64c13872e100/5D55D7D2/t51.2885-15/sh0.08/e35/c87.0.905.905/s640x640/52109988_338478716772682_7437808288017281060_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com"
                  alt="Example Build"
                />
              </CardBody>
              <CardFooter />
            </Card>
          </CardDeck>

          <div>
            <br />
            <h3>Startup Guides</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.techspot.com/guides/1625-diy-build-your-own-mechanical-keyboard/"
            >
              TechSpot
            </a>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.reviewgeek.com/7007/everything-you-need-to-start-building-mechanical-keyboards/"
            >
              ReviewGeek
            </a>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://matt3o.com/all-you-need-to-build-a-custom-keyboard/"
            >
              Matt3o
            </a>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.extremetech.com/extreme/271677-how-to-build-a-custom-mechanical-keyboard-gamepad"
            >
              ExtremeTech
            </a>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mechanicalkeyboards.com/learn.php"
            >
              MechanicalKeyboards
            </a>{" "}
            <h3>Shops</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kbdfans.cn/"
            >
              KBDfans
            </a>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drop.com/"
            >
              Drop
            </a>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mechanicalkeyboards.com/shop"
            >
              MechaniclaKeyboards
            </a>
            <h3>Informational Guides</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.daskeyboard.com/blog/mechanical-keyboard-guide/"
            >
              Das Keyboard
            </a>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.wasdkeyboards.com/mechanical-keyboard-guide"
            >
              WASD Keyboards
            </a>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.reddit.com/r/MechanicalKeyboards/wiki/index"
            >
              Reddit
            </a>{" "}
          </div>
        </Col>
      </div>
    );
  }
}

export default Home;
