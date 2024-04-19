import ColorName from "@/common/literalTypes/ColorName";
import BaseComponentProps from "@/common/models/BaseComponentProps";

export default interface MessageProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >, BaseComponentProps {
  colorName?: ColorName;
}
