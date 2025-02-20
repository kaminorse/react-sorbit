import { classNameUtility } from "../../utilities";
import DialogNameProps from "./DialogNameProps";
import classNames from "./DialogName.module.scss";

export default function DialogName(props: DialogNameProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["as"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["dialog-name"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);
  return props.as ? (
    <props.as {...assignedProps} className={assignedClassNames.join(" ")} />
  ) : (
    <div {...assignedProps} className={assignedClassNames.join(" ")} />
  );
}
