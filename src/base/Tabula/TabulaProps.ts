import React from "react";
import ColorScheme from "../../common/ColorScheme";

export default interface SorbitCssVariableProvider {
  children?: React.ReactNode;
  colorScheme?: ColorScheme;
}