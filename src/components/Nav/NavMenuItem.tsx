import NavMenuItemProps from "./NavMenuItemProps";
import classNames from "./Nav.module.scss";
import classNameUtility from "../../utilities/classNameUtility";

export default function NavMenuItem(props: NavMenuItemProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["as"];
  //#region BaseComponentProps
  delete assignedProps["foreColor"];
  delete assignedProps["backColor"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames =
    classNameUtility.assignBaseComponentPropsClassNames(
      props,
      [classNames["nav-menu-item"]],
      classNames
    );
  props.className && assignedClassNames.push(props.className);
  
  return props.as ? (
    <props.as {...assignedProps} className={assignedClassNames.join(" ")} />
  ) : (
    <span {...assignedProps} className={assignedClassNames.join(" ")} />
  );
}