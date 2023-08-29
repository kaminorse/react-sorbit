import Gradation from "./Gradation";
import SchemeColor from "./SchemeColor";

export default interface ColorCssVariable {
  white?: string | undefined;
  black?: string | undefined;
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