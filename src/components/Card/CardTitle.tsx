import CardBodyProps from "./CardBodyProps";
import classNames from "./Card.module.scss";

export default function CardTitle(props: CardBodyProps): JSX.Element {
  return (
    <div {...props} className={classNames["card-title"]} />
  );
}