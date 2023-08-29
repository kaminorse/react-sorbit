import React from "react";
import BaseComponentProps from "../../common/models/BaseComponentProps";

export default interface HeaderProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
    BaseComponentProps {
  isSticky?: boolean | undefined;
}
