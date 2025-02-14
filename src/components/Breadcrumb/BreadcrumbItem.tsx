import BreadcrumbItemProps from "./BreadcrumbItemProps";
import classNames from "./BreadcrumbItem.module.scss";
import { classNameUtility } from "../../utilities";

export default function BreadcrumbItem(props: BreadcrumbItemProps): JSX.Element {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["breadcrumb-item"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <li {...assignedProps} className={assignedClassNames.join(" ")} />;
}
