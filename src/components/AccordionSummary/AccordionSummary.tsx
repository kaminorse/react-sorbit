"use client";
import { useContext } from "react";
import { SorbitColorSchemeContext } from "../../contexts";
import classNameUtility from "../../utilities/classNameUtility";
import emotionCssUtility from "../../utilities/emotionCssUtility";
import AccordionSummaryProps from "./AccordionSummaryProps";
import classNames from "./AccordionSummary.module.scss";

export default function AccordionSummary(props: AccordionSummaryProps) {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  delete assignedProps["css"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["accordion-summary"]];

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

  const colorScheme = useContext(SorbitColorSchemeContext);

  const css = emotionCssUtility.getEmotionCss(
    {
      fore: props.fore,
      back: props.back,
      border: props.border,
      highlighter: props.highlighter,
      spacing: props.spacing,
      css: props.css,
    },
    colorScheme
  );

  return (
    <summary
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
