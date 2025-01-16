import { classNameUtility } from "../../utilities";
import AdminMainProps from "./AdminMainProps";
import classNames from "./AdminMain.module.scss";

export default function AdminMain(props: AdminMainProps) {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["admin-main"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return props.as ? (
    <props.as {...assignedProps} className={assignedClassNames.join(" ")} />
  ) : (
    <main {...assignedProps} className={assignedClassNames.join(" ")} />
  );
}
