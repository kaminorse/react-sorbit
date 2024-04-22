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
      default?: {
        name: ColorName;
        lightness: ColorLightness;
      }
      hover?: {
        name: ColorName;
        lightness: ColorLightness;
      };
      focus?: {
        name: ColorName;
        lightness: ColorLightness;
      };
      active?: {
        name: ColorName;
        lightness: ColorLightness;
      };
      disabled?: {
        name: ColorName;
        lightness: ColorLightness;
      };
    };
    fontSize?: FontSize;
    fontWeight?: FontWeight;
    isItalic?: boolean;
  };
  back?: {
    color?: {
      default?: {
        name: ColorName;
        lightness: ColorLightness;
      }
      hover?: {
        name: ColorName;
        lightness: ColorLightness;
      };
      focus?: {
        name: ColorName;
        lightness: ColorLightness;
      };
      active?: {
        name: ColorName;
        lightness: ColorLightness;
      };
      disabled?: {
        name: ColorName;
        lightness: ColorLightness;
      };
    };
  };
  highlighter?: {
    color?: {
      default?: {
        name: ColorName;
        lightness: ColorLightness;
      }
      hover?: {
        name: ColorName;
        lightness: ColorLightness;
      };
      focus?: {
        name: ColorName;
        lightness: ColorLightness;
      };
      active?: {
        name: ColorName;
        lightness: ColorLightness;
      };
      disabled?: {
        name: ColorName;
        lightness: ColorLightness;
      };
    };
  };
  border?: {
    color?: {
      default?: {
        name: ColorName;
        lightness: ColorLightness;
      }
      hover?: {
        name: ColorName;
        lightness: ColorLightness;
      };
      focus?: {
        name: ColorName;
        lightness: ColorLightness;
      };
      active?: {
        name: ColorName;
        lightness: ColorLightness;
      };
      disabled?: {
        name: ColorName;
        lightness: ColorLightness;
      };
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
