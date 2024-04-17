import React from "react";
import BaseComponentProps from "../../common/models/BaseComponentProps";
import ColorName from "../../common/literalTypes/ColorName";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface NavProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
}
