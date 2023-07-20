import CardBodyProps from "./CardBodyProps";
import classNames from "./Card.module.scss";

export default function CardBody(props: CardBodyProps): JSX.Element {
  return (
    <div {...props} className={classNames["card-body"]} />
  );
}