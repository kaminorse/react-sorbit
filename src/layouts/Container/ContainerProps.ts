import { BaseComponentProps } from "../../common/models";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface ContainerProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    BaseComponentProps {}
