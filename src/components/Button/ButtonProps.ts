import { ColorName } from "../../common/literalTypes";
import { BaseComponentProps } from "../../common/models";
import React from "react";

export default interface BadgeProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >, BaseComponentProps {
  colorName?: ColorName;
}
