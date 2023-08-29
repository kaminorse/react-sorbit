import SpanProps from "./SpanProps";
import classNames from "./Span.module.scss";
import classNameUtility from "../../utilities/classNameUtility";

export default function Span(props: SpanProps): JSX.Element {
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
      [],
      classNames
    );
  props.className && assignedClassNames.push(props.className);

  return <span {...assignedProps} className={assignedClassNames.join(" ")} />;
}
