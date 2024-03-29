import MessageProps from "./MessageProps";
import classNames from "./Message.module.scss";
import classNameUtility from "../../utilities/classNameUtility";

export default function Message(props: MessageProps): JSX.Element {
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
      [classNames["message"]],
      classNames
    );
  props.colorName &&
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  props.className && assignedClassNames.push(props.className);

  return <div {...assignedProps} className={assignedClassNames.join(" ")} />;
}
