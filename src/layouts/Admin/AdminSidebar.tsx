import { classNameUtility } from "../../utilities";
import classNames from "./AdminSidebar.module.scss";
import AdminSidebarProps from "./AdminSidebarProps";

export default function AdminSidebar(props: AdminSidebarProps) {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["admin-sidebar"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return props.as ? (
    <props.as {...assignedProps} className={assignedClassNames.join(" ")} />
  ) : (
    <aside {...assignedProps} className={assignedClassNames.join(" ")} />
  );
}
