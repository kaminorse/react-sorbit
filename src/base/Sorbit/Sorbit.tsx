import SorbitProps from "./SorbitProps";
import "./Sorbit.module.scss";
import Tabula from "../Tabula";

export default function Sorbit(props: SorbitProps) {
  return (
    <Tabula>{props.children}</Tabula>
  );
}
