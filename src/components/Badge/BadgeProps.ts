import ColorName from "@/common/literalTypes/ColorName";
import BaseComponentProps from "@/common/models/BaseComponentProps";
import React from "react";

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
