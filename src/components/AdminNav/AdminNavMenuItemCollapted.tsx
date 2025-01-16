import classNames from "./AdminNavMenuItemCollapted.module.scss";
import { classNameUtility } from "../../utilities";
import AdminNavMenuItemCollaptedProps from "./AdminNavMenuItemCollaptedProps";

export default function AdminNavMenuItemCollapted(
  props: AdminNavMenuItemCollaptedProps
): JSX.Element {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["admin-nav-menu-item-collapted"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <div {...assignedProps} className={assignedClassNames.join(" ")} />;
}
