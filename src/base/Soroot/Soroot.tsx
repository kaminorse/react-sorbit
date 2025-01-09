import { classNameUtility } from "../../utilities";
import classNames from "./Soroot.module.scss";
import SorootProps from "./SorootProps";

export default function Soroot(props: SorootProps) {
  const assignedProps = { ...props };
  delete assignedProps["colorScheme"];
  delete assignedProps["as"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["soroot"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return props.as ? (
    <props.as {...assignedProps} className={assignedClassNames.join(" ")} data-color-scheme={props.colorScheme} />
  ) : (
    <div {...assignedProps} className={assignedClassNames.join(" ")} data-color-scheme={props.colorScheme} />
  );
}
