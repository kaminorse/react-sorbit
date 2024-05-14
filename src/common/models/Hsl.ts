import { Angle, Percentage } from "../literalTypes";

export default interface Hsl {
  /**
   * 0~360(°)
   */
  hue: Angle;
  /**
   * 0~100(%)
   */
  saturation: Percentage;
  /**
   * 0~100(%)
   */
  lightness: Percentage;
}
