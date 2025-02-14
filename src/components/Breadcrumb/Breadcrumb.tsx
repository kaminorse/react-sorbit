import BreadcrumbProps from "./BreadcrumbProps";
import classNames from "./Breadcrumb.module.scss";
import { classNameUtility } from "../../utilities";

export default function Breadcrumb(props: BreadcrumbProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["breadcrumb"]];
  props.colorName &&
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <ul {...assignedProps} className={assignedClassNames.join(" ")} />;
}
