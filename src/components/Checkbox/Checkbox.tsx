import { classNameUtility } from "../../utilities";
import classNames from "./Checkbox.module.scss";
import CheckboxProps from "./CheckboxProps";

export default function Checkbox(props: CheckboxProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["text"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames =
    classNameUtility.assignBaseComponentPropsClassNames(
      props,
      [classNames["checkbox"]],
      classNames
    );
  props.colorName && assignedClassNames.push(classNames[`is-${props.colorName}`]);
  props.className && assignedClassNames.push(props.className);

  return (
    <span id={props.id} className={assignedClassNames.join(" ")}>
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
