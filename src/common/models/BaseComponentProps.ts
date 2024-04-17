import {
  BorderRadius,
  BorderStyle,
  BorderWidth,
  ColorLightness,
  ColorName,
  FontSize,
  FontWeight,
} from "../literalTypes";
import BorderCollapse from "../literalTypes/BorderCollapse";

export default interface BaseComponentProps {
  fore?: {
    color?: {
      name: ColorName;
      lightness: ColorLightness;
    };
    fontSize?: FontSize;
    fontWeight?: FontWeight;
    isItalic?: boolean;
  };
  back?: {
    color?: {
      name: ColorName;
      lightness: ColorLightness;
    };
  };
  highlighter?: {
    color?: {
      name: ColorName;
      lightness: ColorLightness;
    };
  };
  border?: {
    color?: {
      name: ColorName;
      lightness: ColorLightness;
    };
    collapse?: BorderCollapse;
    radius?: BorderRadius;
    style: BorderStyle;
    width?: BorderWidth;
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
  };
}
