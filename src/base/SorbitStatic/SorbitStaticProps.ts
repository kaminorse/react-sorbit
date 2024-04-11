import React from "react";
import ColorScheme from "../../common/literalTypes/ColorScheme";
import SorbitCssVariable from "../../common/models/SorbitCssVariable";

export default interface SorbitStaticProps {
  children?: React.ReactNode;
  colorScheme?: ColorScheme;
  cssVariableSetting?: SorbitCssVariable;
}