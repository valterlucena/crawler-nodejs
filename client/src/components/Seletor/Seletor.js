import React, { Component } from "react";
import { Button, Form, Input, FormGroup } from "reactstrap";
import "./Seletor.css";

class Seletor extends Component {
  render() {
    return (
      <div className="seletor">
        <Form inline>
          <FormGroup>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Seletor;
