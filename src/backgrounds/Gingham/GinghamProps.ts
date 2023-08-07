import React from "react";
import BaseComponentProps from "../../common/models/BaseComponentProps";
import ColorName from "../../common/ColorName";
import ColorLightness from "../../common/ColorLightness";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface GinghamProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >, BaseComponentProps {
  patternColor?: {
    name: ColorName;
    lightness: ColorLightness;
  } | undefined;
}
