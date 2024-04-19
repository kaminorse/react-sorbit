import { BaseComponentProps } from "../../common/models";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface SpanProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >,
    BaseComponentProps {}
