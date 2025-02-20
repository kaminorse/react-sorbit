import BorderCssVariable from "./BorderCssVariable";
import ColorCssVariable from "./ColorCssVariable";
import ComponentsCssVariable from "./ComponentsCssVariable";
import TypographyCssVariable from "./TypographyCssVariable";

export default interface SorbitCssVariable {
  border?: BorderCssVariable | undefined;
  color?: ColorCssVariable | undefined;
  components?: ComponentsCssVariable | undefined;
  typography?: TypographyCssVariable | undefined;
}
