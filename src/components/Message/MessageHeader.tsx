import MessageHeaderProps from "./MessageHeaderProps";
import classNames from "./Message.module.scss";

export default function MessageHeader(props: MessageHeaderProps): JSX.Element {
  return (
    <div {...props} className={classNames["message-header"]} />
  );
}