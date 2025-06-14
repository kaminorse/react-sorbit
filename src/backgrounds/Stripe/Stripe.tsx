"use client";
import classNameUtility from "../../utilities/classNameUtility";
import emotionCssUtility from "../../utilities/emotionCssUtility";
import classNames from "./Stripe.module.scss";
import StripeProps from "./StripeProps";

export default function Stripe(props: StripeProps) {
  const assignedProps = { ...props };
  delete assignedProps["patternColor"];
  delete assignedProps["degree"];
  delete assignedProps["as"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  delete assignedProps["css"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["stripe"]];
  if (props.patternColor) {
    const lightness =
      props.patternColor.lightness < 100
        ? `0${props.patternColor.lightness}`
        : props.patternColor.lightness;
    assignedClassNames.push(
      classNames[`is-${props.patternColor.name}-${lightness}`]
    );
  }

  if (props.degree) {
    assignedClassNames.push(classNames[`is-${props.degree}deg`]);
  }

  const utilityClassNames = classNameUtility.getUtilityClassNames({
    fore: props.fore,
    back: props.back,
    border: props.border,
    highlighter: props.highlighter,
    spacing: props.spacing,
  });
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }

  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const css = emotionCssUtility.getEmotionCss({
    fore: props.fore,
    back: props.back,
    border: props.border,
    highlighter: props.highlighter,
    spacing: props.spacing,
    css: props.css,
  });

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
