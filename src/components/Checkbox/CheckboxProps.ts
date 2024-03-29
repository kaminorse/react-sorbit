import ColorName from "../../common/ColorName";
import BaseComponentProps from "../../common/models/BaseComponentProps";

export default interface CheckboxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >, BaseComponentProps {
  colorName?: ColorName;
  text?: string | JSX.Element;
}
