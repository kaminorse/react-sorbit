import React from "react";
import BaseComponentProps from "../../common/models/BaseComponentProps";
import ColorName from "../../common/literalTypes/ColorName";
import ColorLightness from "../../common/literalTypes/ColorLightness";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface StripeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >, BaseComponentProps {
  patternColor?: {
    name: ColorName;
    lightness: ColorLightness;
  } | undefined;
}
