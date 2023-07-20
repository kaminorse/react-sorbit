import React from "react";
import ColorType from "../../common/ColorType";

export default interface BadgeProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  colorType?: ColorType;
}
