import { classNameUtility } from "@/utilities";
import classNames from "./Nav.module.scss";
import NavProps from "./NavProps";

export default function Nav(props: NavProps): JSX.Element {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames =
    classNameUtility.assignBaseComponentPropsClassNames(
      props,
      [classNames["nav"]],
      classNames
    );
  props.colorName && assignedClassNames.push(classNames[`is-${props.colorName}`]);
  props.className && assignedClassNames.push(props.className);

  return <nav {...assignedProps} className={assignedClassNames.join(" ")} />;
}
