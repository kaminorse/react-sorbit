import { PropsWithChildren } from "react";
import ColorScheme from "../../common/literalTypes/ColorScheme";
import SorbitCssVariable from "../../common/models/SorbitCssVariable";

export default interface SorbitStaticProps extends PropsWithChildren {
  colorScheme?: ColorScheme;
  cssVariableSetting?: SorbitCssVariable;
}
