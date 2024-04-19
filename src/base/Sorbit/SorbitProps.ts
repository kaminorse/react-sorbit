import ColorScheme from "@/common/literalTypes/ColorScheme";
import SorbitCssVariable from "@/common/models/SorbitCssVariable";
import { PropsWithChildren } from "react";

export default interface SorbitProps extends PropsWithChildren {
  colorScheme?: ColorScheme;
  cssVariableSetting?: SorbitCssVariable;
}
