import React from "react";
import BaseComponentProps from "../../common/models/BaseComponentProps";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface DivProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >, BaseComponentProps {
}
