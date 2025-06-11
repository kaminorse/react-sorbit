"use client";
import { useMemo } from "react";
import classNameUtility from "../../utilities/classNameUtility";
import emotionCssUtility from "../../utilities/emotionCssUtility";
import classNames from "./Card.module.scss";
import CardProps from "./CardProps";

export default function Card(props: CardProps) {
  const assignedProps = { ...props };
  delete assignedProps["as"];
  delete assignedProps["colorName"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  delete assignedProps["css"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["card"]];
  props.colorName &&
    assignedClassNames.push(classNames[`is-${props.colorName}`]);

  const utilityClassNames = useMemo(() => {
    return classNameUtility.getUtilityClassNames({
      fore: props.fore,
      back: props.back,
      border: props.border,
      highlighter: props.highlighter,
      spacing: props.spacing,
    });
  }, [props.fore, props.back, props.border, props.highlighter, props.spacing]);
  assignedClassNames.push(...utilityClassNames);

  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const css = useMemo(() => {
    return emotionCssUtility.getEmotionCss({
      fore: props.fore,
      back: props.back,
      border: props.border,
      highlighter: props.highlighter,
      spacing: props.spacing,
      css: props.css,
    });
  }, [
    props.fore,
    props.back,
    props.border,
    props.highlighter,
    props.spacing,
    props.css,
  ]);

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
