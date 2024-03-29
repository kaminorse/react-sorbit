import React from "react";
import ColorName from "../../common/ColorName";
import BaseComponentProps from "../../common/models/BaseComponentProps";

export default interface BadgeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >, BaseComponentProps {
  colorName?: ColorName;
  isSmall?: boolean;
  as?:
    | React.ElementType
    | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
