import NavDesktopProps from "./NavDesktopProps";
import classNames from "./Nav.module.scss";
import classNameUtility from "../../utilities/classNameUtility";

export default function NavDesktop(props: NavDesktopProps): JSX.Element {
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
      [classNames["nav-desktop"]],
      classNames
    );
  props.className && assignedClassNames.push(props.className);
  return (
    <div {...assignedProps} className={assignedClassNames.join(" ")} />
  )
}