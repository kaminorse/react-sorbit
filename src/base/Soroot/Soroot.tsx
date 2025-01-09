import classNames from "./Soroot.module.scss";
import SorootProps from "./SorootProps";

export default function Soroot(props: SorootProps) {
  return (
    <div className={classNames.Soroot} data-color-scheme={props.colorScheme}>
      {props.children}
    </div>
  );
}
