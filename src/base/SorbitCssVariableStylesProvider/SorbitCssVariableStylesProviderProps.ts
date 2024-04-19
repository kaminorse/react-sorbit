import { SorbitCssVariable } from "../../common/models";
import { PropsWithChildren } from "react";

export default interface SorbitCssVariableStylesProviderProps
  extends PropsWithChildren {
  cssVariableSetting?: SorbitCssVariable;
}
