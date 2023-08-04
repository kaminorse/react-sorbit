import MessageHeaderProps from "./MessageHeaderProps";
import classNames from "./Message.module.scss";
import classNameUtility from "../../utilities/classNameUtility";

export default function MessageHeader(props: MessageHeaderProps): JSX.Element {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["foreColor"];
  delete assignedProps["backColor"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames =
    classNameUtility.assignBaseComponentPropsClassNames(
      props,
      [classNames["message-header"]],
      classNames
    );
  props.className && assignedClassNames.push(props.className);
  
  return (
    <div {...assignedProps} className={assignedClassNames.join(" ")} />
  );
}