import React, { Component } from "react";
import KeyboardManager from "../../modules/KeyboardManager";
import { Card, Form, FormGroup, Label, Button, Input, Col } from "reactstrap";

class EditBuild extends Component {
  state = {
    allCases: [],
    allPCBs: [],
    allKeyswitches: [],
    allKeycaps: [],
    name: "",
    caseId: "",
    pcbId: "",
    keyswitchId: "",
    keycapId: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingBuild = () => {
    const editedBuild = {
      id: this.props.match.params.buildId,
      name: this.state.name,
      caseId: this.state.caseId,
      pcbId: this.state.pcbId,
      keyswitchId: this.state.keyswitchId,
      keycapId: this.state.keycapId
    };
    this.props
      .updateBuild(editedBuild)
      .then(() => this.props.history.push("my-builds"));
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
    KeyboardManager.get("build", this.props.match.params.buildId).then(
      build => {
        this.setState({
          name: build.name,
          caseId: build.caseId,
          pcbId: build.pcbId,
          keyswitchId: build.keyswitchId,
          keycapId: build.keycapId
        });
      }
    );
  }

  render() {
    let allCases = this.state.allCases;
    let allPCBs = this.state.allPCBs;
    let allKeyswitches = this.state.allKeyswitches;
    let allKeycaps = this.state.allKeycaps;
    return (
      <>
        <Form>
          <br />
          <Col>
            <Card>
              <FormGroup>
                <Label>Name:</Label>
                <Input
                  type="text"
                  required
                  onChange={this.handleFieldChange}
                  id="name"
                  value={this.state.name}
                  placeholder="Name of Keyboard"
                />
              </FormGroup>

              <FormGroup>
                <Label>Cases:</Label>
                <Input
                  type="select"
                  id="caseId"
                  onChange={this.handleFieldChange}
                  value={this.state.caseId}
                >
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
                  value={this.state.pcbId}
                >
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
                  value={this.state.keyswitchId}
                >
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
                  value={this.state.keycapId}
                >
                  {allKeycaps.map(items => (
                    <option key={items.id} id="keycapId" value={items.id}>
                      {items.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <Button outline color="info" onClick={this.updateExistingBuild}>
                Update Build
              </Button>
            </Card>
          </Col>
        </Form>
      </>
    );
  }
}

export default EditBuild;
