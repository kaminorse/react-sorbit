"use client";
import classNameUtility from "../../utilities/classNameUtility";
import emotionCssUtility from "../../utilities/emotionCssUtility";
import classNames from "./Paragraph.module.scss";
import ParagraphProps from "./ParagraphProps";

export default function Paragraph(props: ParagraphProps) {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  delete assignedProps["css"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["paragraph"]];

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

  return (
    <p {...assignedProps} className={assignedClassNames.join(" ")} css={css} />
  );
}
