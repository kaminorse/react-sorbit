import ColorLightness from "../ColorLightness";
import ColorName from "../ColorName";

export default interface BaseProps {
  foreColor?: {
    name: ColorName;
    lightness: ColorLightness;
  };
  backColor?: {
    name: ColorName;
    lightness: ColorLightness;
  };
  highlighter?: {
    name: ColorName;
    lightness: ColorLightness;
  };
  spacing?: {
    margin?: {
      top?: number | "auto" | undefined;
      left?: number | "auto" | undefined;
      bottom?: number | "auto" | undefined;
      right?: number | "auto" | undefined;
    };
    padding?: {
      top?: number | "auto" | undefined;
      left?: number | "auto" | undefined;
      bottom?: number | "auto" | undefined;
      right?: number | "auto" | undefined;
    };
  }
}