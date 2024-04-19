import { ColorName } from "../../common/literalTypes";
import { BaseComponentProps } from "../../common/models";

export default interface MessageProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >, BaseComponentProps {
  colorName?: ColorName;
}
