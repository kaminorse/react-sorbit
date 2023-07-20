import CardProps from "./CardProps";
import classNames from "./Card.module.scss";

export default function Card(props: CardProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["colorType"];

  const className = [
    classNames["card"],
    props.colorType ? classNames[`is-${props.colorType}`] : "",
    props.className ? props.className : "",
  ].join(" ");

  return (
    <div {...assignedProps} className={className} />
  );
}
