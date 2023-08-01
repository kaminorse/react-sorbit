import React from "react";
import ColorScheme from "../../common/ColorScheme";
import SorbitCssVariable from "../../common/models/SorbitCssVariable";

export default interface SorbitCssVariableProvider {
  children?: React.ReactNode;
  colorScheme?: ColorScheme;
  cssVariableSetting?: SorbitCssVariable;
}