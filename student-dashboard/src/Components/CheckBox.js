import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const CheckBox = (props) => {
  return (
    <ButtonGroup>
      {props.buttonList.map((button, idx) => (
        <ToggleButton
          key={idx}
          id={`button-${idx}`}
          type="checkbox"
          variant={"outline-secondary"}
          name={button.name}
          value={button.value}
          checked={button.isChecked}
          onChange={props.handleChange}
        >
          {button.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default CheckBox;
