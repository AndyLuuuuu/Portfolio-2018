import React from "react";
import { CloseButton } from "./ButtonStyled";
import CloseBtnIcon from "../../static/icons/button.svg";

const CloseBtn = props => {
  return (
    <CloseButton
      size={props.size}
      src={CloseBtnIcon}
      title="Close Button"
      onClick={event => props.CloseButton(event)}
    />
  );
};

export default CloseBtn;
