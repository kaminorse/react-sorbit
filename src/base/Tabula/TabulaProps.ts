import { ColorScheme } from "../../common/literalTypes";
import React from "react";

export default interface TabulaProps {
  children?: React.ReactNode;
  colorScheme?: ColorScheme;
}