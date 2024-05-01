import Gradation from "./Gradation";
import Hsl from "./Hsl";
import SchemeColor from "./SchemeColor";

export default interface ColorCssVariable {
  white?: Hsl | string | undefined;
  black?: Hsl | string | undefined;
  gray?: Gradation | undefined;
  red?: Gradation | undefined;
  orange?: Gradation | undefined;
  yellow?: Gradation | undefined;
  green?: Gradation | undefined;
  cyan?: Gradation | undefined;
  blue?: Gradation | undefined;
  violet?: Gradation | undefined;
  light?: SchemeColor | undefined;
  dark?: SchemeColor | undefined;
}