import React from "react";
import { ColorLightness, ColorName } from "../../common/literalTypes";
import { BaseComponentProps } from "../../common/models";

export default interface StripeProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    BaseComponentProps {
  as?: React.ElementType | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  patternColor?:
    | {
        name: ColorName;
        lightness: ColorLightness;
      }
    | undefined;
}
