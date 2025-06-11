import { useMemo } from "react";
import classNameUtility from "../../utilities/classNameUtility";
import emotionCssUtility from "../../utilities/emotionCssUtility";
import classNames from "./Checkbox.module.scss";
import CheckboxProps from "./CheckboxProps";

/** @deprecated */
export default function Checkbox(props: CheckboxProps) {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["text"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  delete assignedProps["css"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["checkbox"]];
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

  return (
    <span id={props.id} className={assignedClassNames.join(" ")} css={css}>
      <input
        {...assignedProps}
        id={`${props.id ? props.id : ""}-input`}
        type={"checkbox"}
        className={classNames["checkbox-input"]}
      />
      <label
        id={`${props.id ? props.id : ""}-box`}
        className={classNames["checkbox-box"]}
        htmlFor={`${props.id ? props.id : ""}-input`}
      />
      <label
        id={`${props.id ? props.id : ""}-text`}
        className={classNames["checkbox-text"]}
        htmlFor={`${props.id ? props.id : ""}-input`}
      >
        {props.text}
      </label>
    </span>
  );
}
