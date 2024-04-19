import { SorbitCssVariable } from "../../common/models";
import { PropsWithChildren } from "react";

export default interface SorbitCssVariableStylesProviderStaticProps
  extends PropsWithChildren {
  cssVariableSetting?: SorbitCssVariable;
}
