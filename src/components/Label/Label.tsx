import { classNameUtility } from "../../utilities";
import classNames from "./Label.module.scss";
import LabelProps from "./LabelProps";

export default function Label(props: LabelProps): JSX.Element {
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
      [classNames["label"]],
      classNames
    );
  props.className && assignedClassNames.push(props.className);

  return <label {...assignedProps} className={assignedClassNames.join(" ")} />;
}
