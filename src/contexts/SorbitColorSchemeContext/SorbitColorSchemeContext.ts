"use client";
import { createContext } from "react";
import { ColorScheme } from "../../common/literalTypes";

const SorbitColorSchemeContext = createContext<ColorScheme>("light");

export default SorbitColorSchemeContext;
