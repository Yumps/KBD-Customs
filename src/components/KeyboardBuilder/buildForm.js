import React, { Component } from "react";
import {
  Card,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
  Col,
  CardBody
} from "reactstrap";
import KeyboardManager from "../../modules/KeyboardManager";
class BuildForm extends Component {
  state = {
    allCases: [],
    allPCBs: [],
    allKeyswitches: [],
    allKeycaps: [],
    name: "",
    caseId: "",
    pcbId: "",
    keyswitchId: "",
    keycapId: "",
    public: false
  };

  componentDidMount() {
    KeyboardManager.getAll("cases").then(res => {
      this.setState({ allCases: res });
    });

    KeyboardManager.getAll("pcbs").then(res => {
      this.setState({ allPCBs: res });
    });

    KeyboardManager.getAll("keyswitches").then(res => {
      this.setState({ allKeyswitches: res });
    });

    KeyboardManager.getAll("keycaps").then(res => {
      this.setState({ allKeycaps: res });
    });
  }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructBuild = () => {
    const build = {
      name: this.state.name,
      caseId: this.state.caseId,
      pcbId: this.state.pcbId,
      keyswitchId: this.state.keyswitchId,
      keycapId: this.state.keycapId,
      userId: sessionStorage.getItem("User"),
      public: this.state.public
    };
    this.props.addBuild(build);
    this.props.history.push("/my-builds");
  };

  handleCheck = () => {
    this.setState({ public: !this.state.public });
  };

  render() {
    let allCases = this.state.allCases;
    let allPCBs = this.state.allPCBs;
    let allKeyswitches = this.state.allKeyswitches;
    let allKeycaps = this.state.allKeycaps;

    return (
      <>
        <br />
        <Col sm="8" md={{ offset: 2 }}>
          <Card outline color="primary">
            <br />
            <h1 className="text-center">New Build!</h1>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label>Name:</Label>
                  <Input
                    type="text"
                    required
                    onChange={this.handleFieldChange}
                    id="name"
                    placeholder="Name of Keyboard"
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Cases:</Label>
                  <Input
                    type="select"
                    id="caseId"
                    onChange={this.handleFieldChange}
                  >
                    <option defaultValue value="">
                      Case Options:
                    </option>
                    {allCases.map(items => (
                      <option key={items.id} id="caseId" value={items.id}>
                        {items.name}
                      </option>
                    ))}
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label>PCBs:</Label>
                  <Input
                    type="select"
                    id="pcbId"
                    onChange={this.handleFieldChange}
                  >
                    <option defaultValue value="">
                      PCB Options:
                    </option>
                    {allPCBs.map(items => (
                      <option key={items.id} id="pcbId" value={items.id}>
                        {items.name}
                      </option>
                    ))}
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label>Keyswitches:</Label>
                  <Input
                    type="select"
                    id="keyswitchId"
                    onChange={this.handleFieldChange}
                  >
                    <option defaultValue value="">
                      {" "}
                      Keyswitch Options:
                    </option>
                    {allKeyswitches.map(items => (
                      <option key={items.id} id="keyswitchId" value={items.id}>
                        {items.name}
                      </option>
                    ))}
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label>Keycaps:</Label>
                  <Input
                    type="select"
                    id="keycapId"
                    onChange={this.handleFieldChange}
                  >
                    <option defaultValue value="">
                      Keycap Options:
                    </option>
                    {allKeycaps.map(items => (
                      <option key={items.id} id="keycapId" value={items.id}>
                        {items.name}
                      </option>
                    ))}
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Col>
                  <Label>
                    <Input type="checkbox" onChange={this.handleCheck} />
                    Share Build
                  </Label>
                  </Col>
                </FormGroup>

                <Button outline color="info" onClick={this.constructBuild}>
                  Create Build
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default BuildForm;
