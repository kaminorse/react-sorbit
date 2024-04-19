import BaseComponentProps from "@/common/models/BaseComponentProps";
import React from "react";

export default interface HeaderProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
    BaseComponentProps {
  isSticky?: boolean | undefined;
}
