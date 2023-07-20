import TabulaProps from "./TabulaProps";
import classNames from "./Tabula.module.scss";

export default function Tabula(props: TabulaProps) {
  return (
    <div className={classNames.tabula}>
      {props.children}
    </div>
  )
}