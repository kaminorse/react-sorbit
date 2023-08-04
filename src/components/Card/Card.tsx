import CardProps from "./CardProps";
import classNames from "./Card.module.scss";

export default function Card(props: CardProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];

  const className = [
    classNames["card"],
    props.colorName ? classNames[`is-${props.colorName}`] : "",
    props.className ? props.className : "",
  ].join(" ");

  return (
    <div {...assignedProps} className={className} />
  );
}
