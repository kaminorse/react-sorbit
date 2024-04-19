import ColorCssVariable from "./ColorCssVariable";
import TypographyCssVariable from "./TypographyCssVariable";

export default interface SorbitCssVariable {
  color?: ColorCssVariable | undefined;
  typography?: TypographyCssVariable | undefined;
}
