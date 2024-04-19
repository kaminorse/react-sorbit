import ColorLightness from "@/common/literalTypes/ColorLightness";
import ColorName from "@/common/literalTypes/ColorName";
import BaseComponentProps from "@/common/models/BaseComponentProps";
import React from "react";

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
