import ButtonProps from "./ButtonProps";
import classNames from "./Button.module.scss";
import classNameUtility from "../../utilities/classNameUtility";

export default function Button(props: ButtonProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  //#region BaseComponentProps
  delete assignedProps["foreColor"];
  delete assignedProps["backColor"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames =
    classNameUtility.assignBaseComponentPropsClassNames(
      props,
      [classNames["button"]],
      classNames
    );
  props.colorName && assignedClassNames.push(classNames[`is-${props.colorName}`]);
  props.className && assignedClassNames.push(props.className);

  return (
    <button
      {...assignedProps}
      className={assignedClassNames.join(" ")}
    />
  );
}
