import ColorCssVariable from "./color/ColorCssVariable";
import TypographyCssVariable from "./typography/TypographyCssVariable";

export default interface SorbitCssVariable {
  color?: ColorCssVariable | undefined;
  typography?: TypographyCssVariable | undefined;
}
