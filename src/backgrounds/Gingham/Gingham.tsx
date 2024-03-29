import GinghamProps from "./GinghamProps";
import classNames from "./Gingham.module.scss";
import classNameUtility from "../../utilities/classNameUtility";

export default function Gingham(props: GinghamProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["patternColor"];
  //#region BaseComponentProps
  delete assignedProps["foreColor"];
  delete assignedProps["backColor"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames =
    classNameUtility.assignBaseComponentPropsClassNames(
      props,
      [classNames["gingham"]],
      classNames
    );
  props.patternColor &&
    assignedClassNames.push(
      classNames[
        `is-${props.patternColor.name}-${props.patternColor.lightness}`
      ]
    );
  props.className && assignedClassNames.push(props.className);

  return (
    <Gingham {...assignedProps} className={assignedClassNames.join(" ")} />
  );
}
