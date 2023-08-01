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

  const classNameList = [
    classNames["column"],
  ];
  props.isFull && classNameList.push(classNames["is-full"]);
  props.size && classNameList.push(classNames[`column-${props.size}`]);
  props.sizeMobile && classNameList.push(classNames[`is-mobile-${props.sizeMobile}`]);
  props.sizeMobileOrMore && classNameList.push(classNames[`is-mobile-or-more-${props.sizeMobileOrMore}`]);
  props.sizeTabletOrLess && classNameList.push(classNames[`is-mobile-or-less-${props.sizeTabletOrLess}`]);
  props.sizeTabletOrLess && classNames[`is-tablet-or-less-${props.sizeTabletOrLess}`];
  props.sizeTablet && classNames[`is-tablet-${props.sizeTablet}`];
  props.sizeTabletOrMore && classNames[`is-tablet-or-more-${props.sizeTabletOrMore}`];
  props.sizeDesktopOrLess && classNames[`is-desktop-or-less-${props.sizeDesktopOrLess}`];
  props.sizeDesktop && classNames[`is-desktop-${props.sizeDesktop}`];
  props.sizeDesktopOrMore && classNames[`is-desktop-or-more-${props.sizeDesktopOrMore}`];
  props.sizeWidescreenOrLess && classNames[`is-widescreen-or-less-${props.sizeWidescreenOrLess}`];
  props.sizeWidescreen && classNames[`is-widescreen-${props.sizeWidescreen}`];
  props.sizeWidescreenOrMore && classNames[`is-widescreen-or-more-${props.sizeWidescreenOrMore}`];
  props.sizeFullhdOrLess && classNames[`is-fullhd-or-less-${props.sizeFullhdOrLess}`];
  props.sizeFullhd && classNames[`is-fullhd-${props.sizeFullhd}`];
  props.className && classNameList.push(props.className);

  return (
    <div
      {...assignedProps}
      className={classNameList.join(" ")}
    />
  );
}
