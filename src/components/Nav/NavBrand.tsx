import NavBrandProps from "./NavBrandProps";
import classNames from "./Nav.module.scss";
import classNameUtility from "../../utilities/classNameUtility";

export default function NavBrand(props: NavBrandProps): JSX.Element {
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
      [classNames["nav-brand"]],
      classNames
    );
  props.className && assignedClassNames.push(props.className);
  return (
    <div {...assignedProps} className={assignedClassNames.join(" ")} />
  )
}