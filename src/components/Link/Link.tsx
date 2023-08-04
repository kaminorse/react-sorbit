import LinkProps from "./LinkProps";
import classNames from "./Link.module.scss";
import classNameUtility from "../../utilities/classNameUtility";

export default function Link(props: LinkProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["as"];
  //#region BaseComponentProps
  delete assignedProps["foreColor"];
  delete assignedProps["backColor"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames =
    classNameUtility.assignBaseComponentPropsClassNames(props, [], classNames);
  props.className && assignedClassNames.push(props.className);

  return props.as ? (
    <props.as {...assignedProps} className={assignedClassNames.join(" ")} />
  ) : (
    <a {...assignedProps} className={assignedClassNames.join(" ")} />
  );
}
