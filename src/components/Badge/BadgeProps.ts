import React from "react";
import ColorType from "../../common/ColorType";

export default interface BadgeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  colorType?: ColorType;
  isSmall?: boolean;
}
