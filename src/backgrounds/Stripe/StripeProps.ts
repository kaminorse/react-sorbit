import React from "react";
import { ColorLightness, ColorName } from "../../common/literalTypes";
import { BaseComponentProps } from "../../common/models";

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
