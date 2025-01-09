import { classNameUtility } from "../../utilities";
import classNames from "./Ruby.module.scss";
import RubyProps from "./RubyProps";

export default function Ruby(props: RubyProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["rubyText"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["element"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return (
    <ruby {...assignedProps} className={assignedClassNames.join(" ")}>
      {props.children}
      <rp>(</rp>
      <rt>{props.rubyText}</rt>
      <rp>)</rp>
    </ruby>
  );
}
