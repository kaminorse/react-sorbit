import NavProps from "./NavProps";
import classNames from "./Nav.module.scss";
import classNameUtility from "../../utilities/classNameUtility";

export default function Nav(props: NavProps): JSX.Element {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["foreColor"];
  delete assignedProps["backColor"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames =
    classNameUtility.assignBaseComponentPropsClassNames(
      props,
      [classNames["nav"]],
      classNames
    );
  props.className && assignedClassNames.push(props.className);

  return <nav {...assignedProps} className={assignedClassNames.join(" ")} />;
}
