import React from "react";
import { BaseComponentProps } from "../../common/models";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface LabelProps
  extends React.DetailedHTMLProps<
      React.LabelHTMLAttributes<HTMLLabelElement>,
      HTMLLabelElement
    >,
    BaseComponentProps {}
