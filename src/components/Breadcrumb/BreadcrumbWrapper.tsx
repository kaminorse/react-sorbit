import { classNameUtility } from "../../utilities";
import classNames from "./BreadcrumbWrapper.module.scss";
import BreadcrumbWrapperProps from "./BreadcrumbWrapperProps";

export default function BreadcrumbWrapper(props: BreadcrumbWrapperProps): JSX.Element {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["breadcrumb-wrapper"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <nav {...assignedProps} className={assignedClassNames.join(" ")} />;
}
