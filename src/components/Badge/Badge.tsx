import BadgeProps from "./BadgeProps";
import classNames from "./Badge.module.scss";
import classNameUtility from "../../utilities/classNameUtility";

export default function Badge(props: BadgeProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["isSmall"];
  delete assignedProps["as"];
  //#region BaseComponentProps
  delete assignedProps["foreColor"];
  delete assignedProps["backColor"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames =
    classNameUtility.assignBaseComponentPropsClassNames(
      props,
      [classNames["badge"]],
      classNames
    );
  props.colorName && assignedClassNames.push(classNames[`is-${props.colorName}`]);
  props.isSmall && assignedClassNames.push(classNames[`is-small`]);
  props.className && assignedClassNames.push(props.className);

  return props.as ? (
    <props.as {...assignedProps} className={assignedClassNames.join(" ")} />
  ) : (
    <span {...assignedProps} className={assignedClassNames.join(" ")} />
  );
}
