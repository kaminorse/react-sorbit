import { classNameUtility } from "@/utilities";
import ColumnProps from "./ColumnProps";
import classNames from "./Columns.module.scss";

export default function Column(props: ColumnProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["isFull"];
  delete assignedProps["size"];
  delete assignedProps["sizeMobile"];
  delete assignedProps["sizeMobileOrMore"];
  delete assignedProps["sizeTabletOrLess"];
  delete assignedProps["sizeTablet"];
  delete assignedProps["sizeTabletOrMore"];
  delete assignedProps["sizeDesktopOrLess"];
  delete assignedProps["sizeDesktop"];
  delete assignedProps["sizeDesktopOrMore"];
  delete assignedProps["sizeWidescreenOrLess"];
  delete assignedProps["sizeWidescreen"];
  delete assignedProps["sizeWidescreenOrMore"];
  delete assignedProps["sizeFullhdOrLess"];
  delete assignedProps["sizeFullhd"];
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
      [classNames["column"]],
      classNames
    );
  props.isFull && assignedClassNames.push(classNames["is-full"]);
  props.size && assignedClassNames.push(classNames[`column-${props.size}`]);
  props.sizeMobile && assignedClassNames.push(classNames[`is-mobile-${props.sizeMobile}`]);
  props.sizeMobileOrMore && assignedClassNames.push(classNames[`is-mobile-or-more-${props.sizeMobileOrMore}`]);
  props.sizeTabletOrLess && assignedClassNames.push(classNames[`is-tablet-or-less-${props.sizeTabletOrLess}`]);
  props.sizeTablet && assignedClassNames.push(classNames[`is-tablet-${props.sizeTablet}`]);
  props.sizeTabletOrMore && assignedClassNames.push(classNames[`is-tablet-or-more-${props.sizeTabletOrMore}`]);
  props.sizeDesktopOrLess && assignedClassNames.push(classNames[`is-desktop-or-less-${props.sizeDesktopOrLess}`]);
  props.sizeDesktop && assignedClassNames.push(classNames[`is-desktop-${props.sizeDesktop}`]);
  props.sizeDesktopOrMore && assignedClassNames.push(classNames[`is-desktop-or-more-${props.sizeDesktopOrMore}`]);
  props.sizeWidescreenOrLess && assignedClassNames.push(classNames[`is-widescreen-or-less-${props.sizeWidescreenOrLess}`]);
  props.sizeWidescreen && assignedClassNames.push(classNames[`is-widescreen-${props.sizeWidescreen}`]);
  props.sizeWidescreenOrMore && assignedClassNames.push(classNames[`is-widescreen-or-more-${props.sizeWidescreenOrMore}`]);
  props.sizeFullhdOrLess && assignedClassNames.push(classNames[`is-fullhd-or-less-${props.sizeFullhdOrLess}`]);
  props.sizeFullhd && assignedClassNames.push(classNames[`is-fullhd-${props.sizeFullhd}`]);
  props.className && assignedClassNames.push(props.className);

  return (
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
    />
  );
}
