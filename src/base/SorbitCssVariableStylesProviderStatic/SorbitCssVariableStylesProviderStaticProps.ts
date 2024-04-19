import SorbitCssVariable from "@/common/models/SorbitCssVariable";
import { PropsWithChildren } from "react";

export default interface SorbitCssVariableStylesProviderStaticProps
  extends PropsWithChildren {
  cssVariableSetting?: SorbitCssVariable;
}
