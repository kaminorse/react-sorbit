import React from "react";
import ColorName from "../../common/ColorName";

export default interface CardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  colorName?: ColorName;
}
