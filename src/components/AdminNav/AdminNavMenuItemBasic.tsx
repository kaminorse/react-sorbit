import classNames from "./AdminNavMenuItemBasic.module.scss";
import { classNameUtility } from "../../utilities";
import AdminNavMenuItemBasicProps from "./AdminNavMenuItemBasicProps";

export default function AdminNavMenuItemBasic(
  props: AdminNavMenuItemBasicProps
): JSX.Element {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["admin-nav-menu-item-basic"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <div {...assignedProps} className={assignedClassNames.join(" ")} />;
}
