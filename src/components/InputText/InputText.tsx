import { classNameUtility } from "@/utilities";
import classNames from "./InputText.module.scss";
import InputTextProps from "./InputTextProps";

export default function InputText(props: InputTextProps) {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
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
      [classNames["input-text"]],
      classNames
    );
  props.colorName &&
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  props.className && assignedClassNames.push(props.className);

  return (
    <input
      type="text"
      {...assignedProps}
      className={assignedClassNames.join(" ")}
    />
  );
}
