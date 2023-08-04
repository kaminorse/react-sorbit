import classNameUtility from "../../utilities/classNameUtility";
import classNames from "./Container.module.scss";
import ContainerProps from "./ContainerProps";

export default function Container(props: ContainerProps): JSX.Element {
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
      [classNames["container"]],
      classNames
    );
    props.className && assignedClassNames.push(props.className);

  return (
    <div {...assignedProps} className={assignedClassNames.join(" ")} />
  );
}
