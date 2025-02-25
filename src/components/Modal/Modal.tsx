import { classNameUtility } from "../../utilities";
import classNames from "./Modal.module.scss";
import ModalProps from "./ModalProps";

export default function Modal(props: ModalProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["isActive"];
  delete assignedProps["colorName"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["modal"]];
  props.colorName &&
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  props.isActive && assignedClassNames.push(classNames["is-active"]);
  // assignedClassNames.push(classNames[`is-${props.colorName}`]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <div {...assignedProps} className={assignedClassNames.join(" ")} />;
}
