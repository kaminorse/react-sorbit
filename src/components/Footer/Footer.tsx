"use client";
import classNameUtility from "../../utilities/classNameUtility";
import emotionCssUtility from "../../utilities/emotionCssUtility";
import classNames from "./Footer.module.scss";
import FooterProps from "./FooterProps";

export default function Footer(props: FooterProps) {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["isSticky"];
  delete assignedProps["isFixed"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  delete assignedProps["css"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["Footer"]];
  props.colorName &&
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  props.isSticky && assignedClassNames.push(classNames[`is-sticky`]);
  props.isFixed && assignedClassNames.push(classNames[`is-fixed`]);

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
    <Footer
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
