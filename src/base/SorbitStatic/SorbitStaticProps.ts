import { ColorScheme } from "../../common/literalTypes";
import { SorbitCssVariable } from "../../common/models";
import { PropsWithChildren } from "react";

export default interface SorbitStaticProps extends PropsWithChildren {
  colorScheme?: ColorScheme;
  cssVariableSetting?: SorbitCssVariable;
}
