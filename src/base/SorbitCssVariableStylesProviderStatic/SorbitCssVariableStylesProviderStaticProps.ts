import { PropsWithChildren } from "react";
import SorbitCssVariable from "../../common/models/SorbitCssVariable";

export default interface SorbitCssVariableStylesProviderStaticProps
  extends PropsWithChildren {
  cssVariableSetting?: SorbitCssVariable;
}
