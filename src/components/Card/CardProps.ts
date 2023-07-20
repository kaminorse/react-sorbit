import React from "react";
import ColorType from "../../common/ColorType";

export default interface CardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  colorType?: ColorType;
}
