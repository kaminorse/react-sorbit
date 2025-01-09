import { ColorName } from "../../react-sorbit";
import { DivProps } from "../Div";

export default interface ModalProps extends DivProps {
  isActive?: boolean | undefined;
  colorName?: ColorName;
}
