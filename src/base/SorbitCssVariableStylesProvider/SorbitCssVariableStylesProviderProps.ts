import SorbitCssVariable from "@/common/models/SorbitCssVariable";
import { PropsWithChildren } from "react";

export default interface SorbitCssVariableStylesProviderProps
  extends PropsWithChildren {
  cssVariableSetting?: SorbitCssVariable;
}
