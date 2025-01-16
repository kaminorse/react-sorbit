import { classNameUtility } from "../../utilities";
import classNames from "./AdminNav.module.scss";
import AdminNavProps from "./AdminNavProps";

export default function AdminNav(props: AdminNavProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["admin-nav"]];
  props.colorName &&
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <nav {...assignedProps} className={assignedClassNames.join(" ")} />;
}
