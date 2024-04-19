import classNames from "./Card.module.scss";
import CardBodyProps from "./CardBodyProps";

export default function CardBody(props: CardBodyProps): JSX.Element {
  return (
    <div {...props} className={classNames["card-body"]} />
  );
}