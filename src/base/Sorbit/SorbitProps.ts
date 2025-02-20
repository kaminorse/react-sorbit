import { SorbitCssVariable } from "../../common/models";
import { SorootProps } from "../Soroot";

export default interface SorbitProps extends SorootProps {
  cssVariableSetting?: SorbitCssVariable;
}
