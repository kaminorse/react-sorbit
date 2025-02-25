import { classNameUtility } from "../../utilities";
import classNames from "./Dialog.module.scss";
import DialogProps from "./DialogProps";

export default function Dialog(props: DialogProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["as"];
  delete assignedProps["colorName"];
  delete assignedProps["avatarSize"];
  delete assignedProps["borderStyle"];
  delete assignedProps["borderWidth"];
  delete assignedProps["isRight"];
  delete assignedProps["isAvatarCircle"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["dialog"]];
  props.colorName &&
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  if (props.isRight) {
    assignedClassNames.push(classNames[`is-right`]);
  } else {
    assignedClassNames.push(classNames[`is-left`]);
  }
  if (props.avatarSize) {
    assignedClassNames.push(classNames[`is-avatar-size-${props.avatarSize}`]);
  }
  if (props.borderStyle) {
    assignedClassNames.push(classNames[`is-border-style-${props.borderStyle}`]);
  }
  if (props.borderWidth) {
    assignedClassNames.push(classNames[`is-border-width-${props.borderWidth}`]);
  }
  props.isAvatarCircle &&
    assignedClassNames.push(classNames[`is-avatar-circle`]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return props.as ? (
    <props.as {...assignedProps} className={assignedClassNames.join(" ")} />
  ) : (
    <div {...assignedProps} className={assignedClassNames.join(" ")} />
  );
}
