import BadgeProps from "./BadgeProps";
import classNames from "./Badge.module.scss";

export default function Badge(props: BadgeProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["colorType"];
  delete assignedProps["isSmall"];

  const className = [
    classNames["badge"],
    props.colorType ? classNames[`is-${props.colorType}`] : "",
    props.isSmall ? classNames[`is-small`] : "",
    props.className ? props.className : "",
  ].join(" ");

  return (
    <span
      {...props}
      className={className}
    />
  );
}
