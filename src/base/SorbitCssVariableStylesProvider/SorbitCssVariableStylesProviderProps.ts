import { PropsWithChildren } from "react";
import SorbitCssVariable from "../../common/models/SorbitCssVariable";

export default interface SorbitCssVariableStylesProviderProps
  extends PropsWithChildren {
  cssVariableSetting?: SorbitCssVariable;
}
