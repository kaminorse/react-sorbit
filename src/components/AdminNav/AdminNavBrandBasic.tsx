import classNames from "./AdminNavBrandBasic.module.scss";
import { classNameUtility } from "../../utilities";
import AdminNavBrandBasicProps from "./AdminNavBrandBasicProps";

export default function AdminNavBrandBasic(props: AdminNavBrandBasicProps): JSX.Element {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["admin-nav-brand-basic"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <div {...assignedProps} className={assignedClassNames.join(" ")} />;
}
