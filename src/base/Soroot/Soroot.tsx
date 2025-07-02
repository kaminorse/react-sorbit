"use client";
import classNameUtility from "../../utilities/classNameUtility";
import emotionCssUtility from "../../utilities/emotionCssUtility";
import classNames from "./Soroot.module.scss";
import SorootProps from "./SorootProps";

export default function Soroot(props: SorootProps) {
  const assignedProps = { ...props };
  delete assignedProps["colorScheme"];
  delete assignedProps["as"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  delete assignedProps["css"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["soroot"]];

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

  const css = emotionCssUtility.getEmotionCss(
    {
      fore: props.fore,
      back: props.back,
      border: props.border,
      highlighter: props.highlighter,
      spacing: props.spacing,
      css: props.css,
    },
    props.colorScheme
  );

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      data-color-scheme={props.colorScheme}
      css={css}
    />
  ) : (
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      data-color-scheme={props.colorScheme}
      css={css}
    />
  );
}
