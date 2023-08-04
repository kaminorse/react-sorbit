import DivProps from "./DivProps";
import classNames from "./Div.module.scss";
import classNameUtility from "../../utilities/classNameUtility";

export default function Div(props: DivProps): JSX.Element {
  const assignedProps = { ...props };

  const assignedClassNames =
    classNameUtility.assignBaseComponentPropsClassNames(
      props,
      [],
      classNames
    );
  props.className && assignedClassNames.push(props.className);

  return <div {...assignedProps} className={assignedClassNames.join(" ")} />;
}
