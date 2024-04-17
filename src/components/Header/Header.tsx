import HeaderProps from "./HeaderProps";
import classNames from "./Header.module.scss";
import classNameUtility from "../../utilities/classNameUtility";

export default function Header(props: HeaderProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["isSticky"];
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
      [classNames["header"]],
      classNames
    );
  props.isSticky && assignedClassNames.push(classNames[`is-sticky`]);
  props.className && assignedClassNames.push(props.className);

  return <header {...assignedProps} className={assignedClassNames.join(" ")} />;
}
