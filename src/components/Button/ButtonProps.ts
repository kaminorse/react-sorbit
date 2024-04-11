import React from "react";
import ColorName from "../../common/literalTypes/ColorName";
import BaseComponentProps from "../../common/models/BaseComponentProps";

export default interface BadgeProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >, BaseComponentProps {
  colorName?: ColorName;
}
