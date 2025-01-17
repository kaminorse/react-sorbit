import {
  BorderCollapse,
  BorderDetailProps,
  BorderRadius,
  BorderStyle,
  BorderWidth,
  ColorProps,
  FontSize,
  FontWeight,
} from "../literalTypes";

export default interface BaseComponentProps {
  fore?: {
    color?: ColorProps;
    fontSize?: FontSize;
    fontWeight?: FontWeight;
    isItalic?: boolean;
  };
  back?: {
    color?: ColorProps;
  };
  highlighter?: {
    color?: ColorProps;
  };
  border?: {
    color?: ColorProps;
    collapse?: BorderCollapse;
    radius?: BorderRadius;
    style: BorderStyle;
    width?: BorderWidth;
    top?: BorderDetailProps;
    bottom?: BorderDetailProps;
    left?: BorderDetailProps;
    right?: BorderDetailProps;
  };
  spacing?: {
    margin?:
      | {
          x?: number | "auto";
          y?: number | "auto";
          top?: number | "auto";
          left?: number | "auto";
          bottom?: number | "auto";
          right?: number | "auto";
        }
      | number
      | "auto";
    padding?:
      | {
          x?: number | "auto";
          y?: number | "auto";
          top?: number | "auto";
          left?: number | "auto";
          bottom?: number | "auto";
          right?: number | "auto";
        }
      | number
      | "auto";
  };
}
