import { classNameUtility } from "@/utilities";
import classNames from "./Section.module.scss";
import SectionProps from "./SectionProps";

export default function Section(props: SectionProps): JSX.Element {
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
      [],
      classNames
    );
  props.className && assignedClassNames.push(props.className);

  return <section {...assignedProps} className={assignedClassNames.join(" ")} />;
}
