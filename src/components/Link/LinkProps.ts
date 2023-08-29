import React from "react";
import BaseComponentProps from "../../common/models/BaseComponentProps";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface LinkProps
  extends React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    BaseComponentProps {
  as?:
    | React.ElementType
    | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
