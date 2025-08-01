"use client";
import { css, CSSObject, Interpolation, Theme } from "@emotion/react";
import type { CSSInterpolation } from "@emotion/serialize";
import { ColorAttributes, ColorScheme } from "../../common/literalTypes";
import { BaseComponentProps } from "../../common/models";

const cssVariablePrefix = "sorbit-";

interface ComponentStateColorCssProperty {
  default?: string;
  hover?: string;
  focus?: string;
  active?: string;
  disabled?: string;
}

function getColorProps(
  props?: {
    default?: ColorAttributes;
    hover?: ColorAttributes;
    focus?: ColorAttributes;
    active?: ColorAttributes;
    disabled?: ColorAttributes;
  },
  mode?: "highlighter"
): ComponentStateColorCssProperty {
  if (!props) {
    return {
      default: undefined,
      hover: undefined,
      focus: undefined,
      active: undefined,
      disabled: undefined,
    };
  }

  if (mode === "highlighter") {
    return {
      default: getHighlighterBackgroundVariable(props.default),
      hover: getHighlighterBackgroundVariable(props.hover),
      focus: getHighlighterBackgroundVariable(props.focus),
      active: getHighlighterBackgroundVariable(props.active),
      disabled: getHighlighterBackgroundVariable(props.disabled),
    };
  }

  return {
    default: getColorVariable(props.default),
    hover: getColorVariable(props.hover),
    focus: getColorVariable(props.focus),
    active: getColorVariable(props.active),
    disabled: getColorVariable(props.disabled),
  };
}

function getColorVariable(
  colorAttributes?: ColorAttributes
): string | undefined {
  if (!colorAttributes) {
    return undefined;
  }

  if (colorAttributes.alpha) {
    return `oklch(var(--${cssVariablePrefix}color-${colorAttributes.name}-${
      colorAttributes.lightness === 50 ? "050" : colorAttributes.lightness
    }-oklch) / ${colorAttributes.alpha}) !important`;
  }

  return `var(--${cssVariablePrefix}color-${colorAttributes.name}-${
    colorAttributes.lightness === 50 ? "050" : colorAttributes.lightness
  }) !important`;
}

function getHighlighterBackgroundVariable(
  colorAttributes?: ColorAttributes
): string | undefined {
  if (!colorAttributes) {
    return undefined;
  }

  if (colorAttributes.alpha) {
    return `linear-gradient(
    transparent 66.66%,
    oklch(var(--${cssVariablePrefix}color-${colorAttributes.name}-${
      colorAttributes.lightness === 50 ? "050" : colorAttributes.lightness
    }-oklch) / ${colorAttributes.alpha}) 33.33%)`;
  }

  return `linear-gradient(
    transparent 66.66%,
    var(--${cssVariablePrefix}color-${colorAttributes.name}-${colorAttributes.lightness}) 33.33%)`;
}

function getCssObject(props: {
  foreColor?: string;
  backColor?: string;
  highlighter?: string;
  borderColor?: string;
  borderTopColor?: string;
  borderRightColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
}): CSSObject | undefined {
  return props.foreColor ||
    props.backColor ||
    props.highlighter ||
    props.borderColor
    ? {
        color: props.foreColor,
        backgroundColor: props.backColor,
        backgroundImage: props.highlighter,
        borderColor: props.borderColor,
        borderTopColor: props.borderTopColor,
        borderRightColor: props.borderRightColor,
        borderBottomColor: props.borderBottomColor,
        borderLeftColor: props.borderLeftColor,
      }
    : undefined;
}

function getSchemeCssObject({
  foreColor,
  backColor,
  highlighter,
  borderColor,
  borderTopColor,
  borderRightColor,
  borderBottomColor,
  borderLeftColor,
}: {
  foreColor?: ComponentStateColorCssProperty;
  backColor?: ComponentStateColorCssProperty;
  highlighter?: ComponentStateColorCssProperty;
  borderColor?: ComponentStateColorCssProperty;
  borderTopColor?: ComponentStateColorCssProperty;
  borderRightColor?: ComponentStateColorCssProperty;
  borderBottomColor?: ComponentStateColorCssProperty;
  borderLeftColor?: ComponentStateColorCssProperty;
}) {
  return (
    (foreColor ||
      backColor ||
      highlighter ||
      borderColor ||
      borderTopColor ||
      borderRightColor ||
      borderBottomColor ||
      borderLeftColor) && {
      color: foreColor && foreColor.default,
      backgroundColor: backColor && backColor.default,
      backgroundImage: highlighter && highlighter.default,
      borderColor: borderColor && borderColor.default,
      borderTopColor: borderTopColor && borderTopColor.default,
      borderRightColor: borderRightColor && borderRightColor.default,
      borderBottomColor: borderBottomColor && borderBottomColor.default,
      borderLeftColor: borderLeftColor && borderLeftColor.default,
      ":hover": getCssObject({
        foreColor: foreColor && foreColor.hover,
        backColor: backColor && backColor.hover,
        highlighter: highlighter && highlighter.hover,
        borderColor: borderColor && borderColor.hover,
        borderTopColor: borderTopColor && borderTopColor.hover,
        borderRightColor: borderRightColor && borderRightColor.hover,
        borderBottomColor: borderBottomColor && borderBottomColor.hover,
        borderLeftColor: borderLeftColor && borderLeftColor.hover,
      }),
      ":focus": getCssObject({
        foreColor: foreColor && foreColor.focus,
        backColor: backColor && backColor.focus,
        highlighter: highlighter && highlighter.focus,
        borderColor: borderColor && borderColor.focus,
        borderTopColor: borderTopColor && borderTopColor.focus,
        borderRightColor: borderRightColor && borderRightColor.focus,
        borderBottomColor: borderBottomColor && borderBottomColor.focus,
        borderLeftColor: borderLeftColor && borderLeftColor.focus,
      }),
      ":active": getCssObject({
        foreColor: foreColor && foreColor.active,
        backColor: backColor && backColor.active,
        highlighter: highlighter && highlighter.active,
        borderColor: borderColor && borderColor.active,
        borderTopColor: borderTopColor && borderTopColor.active,
        borderRightColor: borderRightColor && borderRightColor.active,
        borderBottomColor: borderBottomColor && borderBottomColor.active,
        borderLeftColor: borderLeftColor && borderLeftColor.active,
      }),
      "[disabled]": getCssObject({
        foreColor: foreColor && foreColor.disabled,
        backColor: backColor && backColor.disabled,
        highlighter: highlighter && highlighter.disabled,
        borderColor: borderColor && borderColor.disabled,
        borderTopColor: borderTopColor && borderTopColor.disabled,
        borderRightColor: borderRightColor && borderRightColor.disabled,
        borderBottomColor: borderBottomColor && borderBottomColor.disabled,
        borderLeftColor: borderLeftColor && borderLeftColor.disabled,
      }),
    }
  );
}

function getEmotionCss(
  props: BaseComponentProps,
  colorScheme?: ColorScheme
): Interpolation<Theme> {
  const keys = Object.keys(props);

  const baseComponentPropsKeys = keys.filter(
    (key) =>
      key === "fore" ||
      key === "back" ||
      key === "highlighter" ||
      key === "border" ||
      key === "spacing"
  );

  if (baseComponentPropsKeys.length === 0) {
    if (props.css) {
      return props.css;
    }
    return undefined;
  }

  //#region fore
  const foreColorBase = props.fore && getColorProps(props.fore.color);
  const foreColorLight =
    props.fore && props.fore.color && getColorProps(props.fore.color.light);
  const foreColorDark =
    props.fore && props.fore.color && getColorProps(props.fore.color.dark);

  const fontSize =
    props.fore && props.fore.fontSize
      ? `var(--${cssVariablePrefix}font-size-${props.fore.fontSize})`
      : undefined;

  const fontWeight =
    props.fore && props.fore.fontWeight
      ? `var(--${cssVariablePrefix}font-weight-${props.fore.fontWeight})`
      : undefined;

  //#endregion fore

  //#region back
  const backColorBase = props.back && getColorProps(props.back.color);
  const backColorLight =
    props.back && props.back.color && getColorProps(props.back.color.light);
  const backColorDark =
    props.back && props.back.color && getColorProps(props.back.color.dark);

  //#endregion back

  //#region highlighter
  const highlighterColorBase =
    props.highlighter && getColorProps(props.highlighter.color, "highlighter");

  const highlighterColorLight =
    props.highlighter &&
    props.highlighter.color &&
    getColorProps(props.highlighter.color.light, "highlighter");

  const highlighterColorDark =
    props.highlighter &&
    props.highlighter.color &&
    getColorProps(props.highlighter.color.dark, "highlighter");

  //#endregion highlighter

  //#region border
  const borderColorBase = props.border && getColorProps(props.border.color);

  const borderTopColorBase =
    props.border && props.border.top && getColorProps(props.border.top.color);

  const borderRightColorBase =
    props.border &&
    props.border.right &&
    getColorProps(props.border.right.color);

  const borderBottomColorBase =
    props.border &&
    props.border.bottom &&
    getColorProps(props.border.bottom.color);

  const borderLeftColorBase =
    props.border && props.border.left && getColorProps(props.border.left.color);
  const borderColorLight =
    props.border &&
    props.border.color &&
    getColorProps(props.border.color.light);

  const borderTopColorLight =
    props.border &&
    props.border.top &&
    props.border.top.color &&
    getColorProps(props.border.top.color.light);

  const borderRightColorLight =
    props.border &&
    props.border.right &&
    props.border.right.color &&
    getColorProps(props.border.right.color.light);

  const borderBottomColorLight =
    props.border &&
    props.border.bottom &&
    props.border.bottom.color &&
    getColorProps(props.border.bottom.color.light);

  const borderLeftColorLight =
    props.border &&
    props.border.left &&
    props.border.left.color &&
    getColorProps(props.border.left.color.light);

  const borderColorDark =
    props.border &&
    props.border.color &&
    getColorProps(props.border.color.dark);

  const borderTopColorDark =
    props.border &&
    props.border.top &&
    props.border.top.color &&
    getColorProps(props.border.top.color.dark);

  const borderRightColorDark =
    props.border &&
    props.border.right &&
    props.border.right.color &&
    getColorProps(props.border.right.color.dark);

  const borderBottomColorDark =
    props.border &&
    props.border.bottom &&
    props.border.bottom.color &&
    getColorProps(props.border.bottom.color.dark);

  const borderLeftColorDark =
    props.border &&
    props.border.left &&
    props.border.left.color &&
    getColorProps(props.border.left.color.dark);

  //#endregion border

  const hover = getCssObject({
    foreColor: foreColorBase && foreColorBase.hover,
    backColor: backColorBase && backColorBase.hover,
    highlighter: highlighterColorBase && highlighterColorBase.hover,
    borderColor: borderColorBase && borderColorBase.hover,
    borderTopColor: borderTopColorBase && borderTopColorBase.hover,
    borderRightColor: borderRightColorBase && borderRightColorBase.hover,
    borderBottomColor: borderBottomColorBase && borderBottomColorBase.hover,
    borderLeftColor: borderLeftColorBase && borderLeftColorBase.hover,
  });

  const focus = getCssObject({
    foreColor: foreColorBase && foreColorBase.focus,
    backColor: backColorBase && backColorBase.focus,
    highlighter: highlighterColorBase && highlighterColorBase.focus,
    borderColor: borderColorBase && borderColorBase.focus,
    borderTopColor: borderTopColorBase && borderTopColorBase.focus,
    borderRightColor: borderRightColorBase && borderRightColorBase.focus,
    borderBottomColor: borderBottomColorBase && borderBottomColorBase.focus,
    borderLeftColor: borderLeftColorBase && borderLeftColorBase.focus,
  });

  const active = getCssObject({
    foreColor: foreColorBase && foreColorBase.active,
    backColor: backColorBase && backColorBase.active,
    highlighter: highlighterColorBase && highlighterColorBase.active,
    borderColor: borderColorBase && borderColorBase.active,
    borderTopColor: borderTopColorBase && borderTopColorBase.active,
    borderRightColor: borderRightColorBase && borderRightColorBase.active,
    borderBottomColor: borderBottomColorBase && borderBottomColorBase.active,
    borderLeftColor: borderLeftColorBase && borderLeftColorBase.active,
  });

  const disabled = getCssObject({
    foreColor: foreColorBase && foreColorBase.disabled,
    backColor: backColorBase && backColorBase.disabled,
    highlighter: highlighterColorBase && highlighterColorBase.disabled,
    borderColor: borderColorBase && borderColorBase.disabled,
    borderTopColor: borderTopColorBase && borderTopColorBase.disabled,
    borderRightColor: borderRightColorBase && borderRightColorBase.disabled,
    borderBottomColor: borderBottomColorBase && borderBottomColorBase.disabled,
    borderLeftColor: borderLeftColorBase && borderLeftColorBase.disabled,
  });

  const light = getSchemeCssObject({
    foreColor: foreColorLight,
    backColor: backColorLight,
    highlighter: highlighterColorLight,
    borderColor: borderColorLight,
    borderTopColor: borderTopColorLight,
    borderRightColor: borderRightColorLight,
    borderBottomColor: borderBottomColorLight,
    borderLeftColor: borderLeftColorLight,
  });

  const dark = getSchemeCssObject({
    foreColor: foreColorDark,
    backColor: backColorDark,
    highlighter: highlighterColorDark,
    borderColor: borderColorDark,
    borderTopColor: borderTopColorDark,
    borderRightColor: borderRightColorDark,
    borderBottomColor: borderBottomColorDark,
    borderLeftColor: borderLeftColorDark,
  });

  const cssArray: CSSInterpolation[] = [];

  const baseCss: CSSInterpolation = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    borderCollapse:
      props.border && props.border.collapse
        ? props.border.collapse === "collapted"
          ? "collapse"
          : "separate"
        : undefined,
    borderRadius:
      props.border && props.border.radius
        ? `var(--${cssVariablePrefix}border-radius-${props.border.radius})`
        : undefined,
    borderStyle:
      props.border && props.border.style ? props.border.style : undefined,
    borderWidth:
      props.border && props.border.width
        ? `var(--${cssVariablePrefix}border-width-${props.border.width})`
        : undefined,
    borderTopStyle:
      props.border && props.border.top && props.border.top.style
        ? props.border.top.style
        : undefined,
    borderTopWidth:
      props.border && props.border.top && props.border.top.width
        ? `var(--${cssVariablePrefix}border-width-${props.border.top.width})`
        : undefined,
    borderRightStyle:
      props.border && props.border.right && props.border.right.style
        ? props.border.right.style
        : undefined,
    borderRightWidth:
      props.border && props.border.right && props.border.right.width
        ? `var(--${cssVariablePrefix}border-width-${props.border.right.width})`
        : undefined,
    borderBottomStyle:
      props.border && props.border.bottom && props.border.bottom.style
        ? props.border.bottom.style
        : undefined,
    borderBottomWidth:
      props.border && props.border.bottom && props.border.bottom.width
        ? `var(--${cssVariablePrefix}border-width-${props.border.bottom.width})`
        : undefined,
    borderLeftStyle:
      props.border && props.border.left && props.border.left.style
        ? props.border.left.style
        : undefined,
    borderLeftWidth:
      props.border && props.border.left && props.border.left.width
        ? `var(--${cssVariablePrefix}border-width-${props.border.left.width})`
        : undefined,
    margin:
      props.spacing && props.spacing.margin
        ? typeof props.spacing.margin === "number"
          ? `${props.spacing.margin}rem`
          : typeof props.spacing.margin === "string"
          ? props.spacing.margin
          : undefined
        : undefined,
    marginTop:
      props.spacing &&
      props.spacing.margin &&
      typeof props.spacing.margin === "object" &&
      props.spacing.margin.top
        ? typeof props.spacing.margin.top === "number"
          ? `${props.spacing.margin.top}rem`
          : props.spacing.margin.top
        : props.spacing &&
          props.spacing.margin &&
          typeof props.spacing.margin === "object" &&
          props.spacing.margin.y
        ? typeof props.spacing.margin.y === "number"
          ? `${props.spacing.margin.y}rem`
          : props.spacing.margin.y
        : undefined,
    marginRight:
      props.spacing &&
      props.spacing.margin &&
      typeof props.spacing.margin === "object" &&
      props.spacing.margin.right
        ? typeof props.spacing.margin.right === "number"
          ? `${props.spacing.margin.right}rem`
          : props.spacing.margin.right
        : props.spacing &&
          props.spacing.margin &&
          typeof props.spacing.margin === "object" &&
          props.spacing.margin.x
        ? typeof props.spacing.margin.x === "number"
          ? `${props.spacing.margin.x}rem`
          : props.spacing.margin.x
        : undefined,
    marginBottom:
      props.spacing &&
      props.spacing.margin &&
      typeof props.spacing.margin === "object" &&
      props.spacing.margin.bottom
        ? typeof props.spacing.margin.bottom === "number"
          ? `${props.spacing.margin.bottom}rem`
          : props.spacing.margin.bottom
        : props.spacing &&
          props.spacing.margin &&
          typeof props.spacing.margin === "object" &&
          props.spacing.margin.y
        ? typeof props.spacing.margin.y === "number"
          ? `${props.spacing.margin.y}rem`
          : props.spacing.margin.y
        : undefined,
    marginLeft:
      props.spacing &&
      props.spacing.margin &&
      typeof props.spacing.margin === "object" &&
      props.spacing.margin.left
        ? typeof props.spacing.margin.left === "number"
          ? `${props.spacing.margin.left}rem`
          : props.spacing.margin.left
        : props.spacing &&
          props.spacing.margin &&
          typeof props.spacing.margin === "object" &&
          props.spacing.margin.x
        ? typeof props.spacing.margin.x === "number"
          ? `${props.spacing.margin.x}rem`
          : props.spacing.margin.x
        : undefined,
    padding:
      props.spacing && props.spacing.padding
        ? typeof props.spacing.padding === "number"
          ? `${props.spacing.padding}rem`
          : typeof props.spacing.padding === "string"
          ? props.spacing.padding
          : undefined
        : undefined,
    paddingTop:
      props.spacing &&
      props.spacing.padding &&
      typeof props.spacing.padding === "object" &&
      props.spacing.padding.top
        ? typeof props.spacing.padding.top === "number"
          ? `${props.spacing.padding.top}rem`
          : props.spacing.padding.top
        : props.spacing &&
          props.spacing.padding &&
          typeof props.spacing.padding === "object" &&
          props.spacing.padding.y
        ? typeof props.spacing.padding.y === "number"
          ? `${props.spacing.padding.y}rem`
          : props.spacing.padding.y
        : undefined,
    paddingRight:
      props.spacing &&
      props.spacing.padding &&
      typeof props.spacing.padding === "object" &&
      props.spacing.padding.right
        ? typeof props.spacing.padding.right === "number"
          ? `${props.spacing.padding.right}rem`
          : props.spacing.padding.right
        : props.spacing &&
          props.spacing.padding &&
          typeof props.spacing.padding === "object" &&
          props.spacing.padding.x
        ? typeof props.spacing.padding.x === "number"
          ? `${props.spacing.padding.x}rem`
          : props.spacing.padding.x
        : undefined,
    paddingBottom:
      props.spacing &&
      props.spacing.padding &&
      typeof props.spacing.padding === "object" &&
      props.spacing.padding.bottom
        ? typeof props.spacing.padding.bottom === "number"
          ? `${props.spacing.padding.bottom}rem`
          : props.spacing.padding.bottom
        : props.spacing &&
          props.spacing.padding &&
          typeof props.spacing.padding === "object" &&
          props.spacing.padding.y
        ? typeof props.spacing.padding.y === "number"
          ? `${props.spacing.padding.y}rem`
          : props.spacing.padding.y
        : undefined,
    paddingLeft:
      props.spacing &&
      props.spacing.padding &&
      typeof props.spacing.padding === "object" &&
      props.spacing.padding.left
        ? typeof props.spacing.padding.left === "number"
          ? `${props.spacing.padding.left}rem`
          : props.spacing.padding.left
        : props.spacing &&
          props.spacing.padding &&
          typeof props.spacing.padding === "object" &&
          props.spacing.padding.x
        ? typeof props.spacing.padding.x === "number"
          ? `${props.spacing.padding.x}rem`
          : props.spacing.padding.x
        : undefined,
  };
  cssArray.push(baseCss);

  const defaultColorCss = {
    color: foreColorBase && foreColorBase.default,
    backgroundColor: backColorBase && backColorBase.default,
    backgroundImage: highlighterColorBase && highlighterColorBase.default,
    borderColor: borderColorBase && borderColorBase.default,
    borderTopColor: borderTopColorBase && borderTopColorBase.default,
    borderRightColor: borderRightColorBase && borderRightColorBase.default,
    borderBottomColor: borderBottomColorBase && borderBottomColorBase.default,
    borderLeftColor: borderLeftColorBase && borderLeftColorBase.default,
    ":hover": hover,
    ":focus": focus,
    ":active": active,
    "[disabled]": disabled,
  };
  cssArray.push(defaultColorCss);

  if (colorScheme === "light" && light) {
    cssArray.push(light);
  }

  if (colorScheme === "dark" && dark) {
    cssArray.push(dark);
  }

  const sorbitUtilityStyles = css(cssArray);

  if (props.css) {
    return [sorbitUtilityStyles, props.css];
  }

  return sorbitUtilityStyles;
}

const emotionStyleUtility = {
  getColorVariable,
  getEmotionCss,
};

export default emotionStyleUtility;
