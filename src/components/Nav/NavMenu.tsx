import NavMenuProps from "./NavMenuProps";
import classNames from "./Nav.module.scss";
import classNameUtility from "../../utilities/classNameUtility";

export default function NavMenu(props: NavMenuProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["isActive"];
  //#region BaseComponentProps
  delete assignedProps["foreColor"];
  delete assignedProps["backColor"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames =
    classNameUtility.assignBaseComponentPropsClassNames(
      props,
      [classNames["nav-menu"]],
      classNames
    );
  props.isActive && assignedClassNames.push(classNames["is-active"]);
  props.className && assignedClassNames.push(props.className);
  return (
    <div {...assignedProps} className={assignedClassNames.join(" ")} />
  )
}