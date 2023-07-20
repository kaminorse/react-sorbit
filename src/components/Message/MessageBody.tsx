import MessageBodyProps from "./MessageBodyProps";
import classNames from "./Message.module.scss";

export default function MessageBody(props: MessageBodyProps): JSX.Element {
  return (
    <div {...props} className={classNames["message-body"]} />
  );
}