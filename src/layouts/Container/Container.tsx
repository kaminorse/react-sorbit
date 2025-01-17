import { classNameUtility } from "../../utilities";
import classNames from "./Container.module.scss";
import ContainerProps from "./ContainerProps";

export default function Container(props: ContainerProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["gutter"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["container"]];

  if (props.gutter) {
    if (typeof props.gutter === "string") {
      assignedClassNames.push(classNames[`has-gutter-${props.gutter}`]);
    } else if (typeof props.gutter === "number") {
      assignedClassNames.push(classNames[`has-gutter-${props.gutter}rem`]);
    } else {
      if (props.gutter.x) {
        if (typeof props.gutter.x === "string") {
          assignedClassNames.push(classNames[`has-gutter-x-${props.gutter.x}`]);
        } else if (typeof props.gutter.x === "number") {
          assignedClassNames.push(
            classNames[`has-gutter-x-${props.gutter.x}rem`]
          );
        }
      }
      if (props.gutter.y) {
        if (typeof props.gutter.y === "string") {
          assignedClassNames.push(classNames[`has-gutter-y-${props.gutter.y}`]);
        } else if (typeof props.gutter.y === "number") {
          assignedClassNames.push(
            classNames[`has-gutter-y-${props.gutter.y}rem`]
          );
        }
      }
    }
  }

  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <div {...assignedProps} className={assignedClassNames.join(" ")} />;
}
