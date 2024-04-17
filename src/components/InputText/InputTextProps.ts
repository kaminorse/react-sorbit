import { ColorName } from "../../common/literalTypes";
import BaseComponentProps from "../../common/models/BaseComponentProps";

export default interface InputTextProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    BaseComponentProps {
  colorName?: ColorName;
}
