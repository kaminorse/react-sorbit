import React from "react";
import ColorName from "../../common/ColorName";
import BaseComponentProps from "../../common/models/BaseComponentProps";

export default interface CardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >, BaseComponentProps {
  colorName?: ColorName;
  as?:
    | React.ElementType
    | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
