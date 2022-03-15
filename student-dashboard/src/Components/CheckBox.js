import React, { Component } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

class CheckBox extends Component {
  constructor() {
    super();
    this.state = {
      buttons: [
        { name: "show difficulty", value: "1", isChecked: false },
        { name: "show enjoyment", value: "2", isChecked: false },
        { name: "show all", value: "3", isChecked: true },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox" || "radio"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });

    this.setState((prevState) => {
      const updatedIsChecked = prevState.buttons.map((button) => {
        if (button.name === name) {
          return {
            ...button,
            isChecked: !button.isChecked,
          };
        }
        return {
          ...button,
          isChecked: false,
        };
      });

      console.log(updatedIsChecked);
      return {
        buttons: updatedIsChecked,
      };
    });
  }

  render() {
    return (
      <ButtonGroup>
        {this.state.buttons.map((button, idx) => (
          <ToggleButton
            key={idx}
            id={`button-${idx}`}
            type="checkbox"
            variant={"outline-secondary"}
            name={button.name}
            value={button.value}
            checked={button.isChecked}
            onChange={this.handleChange}
          >
            {button.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    );
  }
}

export default CheckBox;
