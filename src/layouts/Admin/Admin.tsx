import { classNameUtility } from "../../utilities";
import AdminProps from "./AdminProps";
import classNames from "./Admin.module.scss";

export default function Admin(props: AdminProps) {
  const assignedProps = { ...props };
  delete assignedProps["as"];
  delete assignedProps["isSidebarCollapse"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["admin"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  const sidebarCollapse = props.isSidebarCollapse ? "collapse" : "";

  return props.as ? (
    <props.as {...assignedProps} className={assignedClassNames.join(" ")} data-sorbit-admin-sidebar={sidebarCollapse} />
  ) : (
    <div {...assignedProps} className={assignedClassNames.join(" ")} data-sorbit-admin-sidebar={sidebarCollapse} />
  );
}
