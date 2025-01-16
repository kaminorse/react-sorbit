import classNames from "./AdminNavBrandCollapted.module.scss";
import { classNameUtility } from "../../utilities";
import AdminNavBrandCollaptedProps from "./AdminNavBrandCollaptedProps";

export default function AdminNavBrandCollapted(props: AdminNavBrandCollaptedProps): JSX.Element {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["admin-nav-brand-collapted"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <div {...assignedProps} className={assignedClassNames.join(" ")} />;
}
