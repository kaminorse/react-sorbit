import MessageProps from "./MessageProps";
import classNames from "./Message.module.scss";

export default function Message(props: MessageProps): JSX.Element {
  const className = props.colorType
    ? `${classNames.message} ${classNames[`is-${props.colorType}`]}`
    : classNames.message;

  const assignedProps = { ...props };
  delete assignedProps["colorType"];

  return (
    <div
      {...assignedProps}
      className={
        props.className ? `${className} ${props.className}` : className
      }
    />
  );
}
