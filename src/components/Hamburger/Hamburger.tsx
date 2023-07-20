import classNames from "./Hamburger.module.scss";
import HamburgerProps from "./HamburgerProps";

export default function Hamburger(props: HamburgerProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["isActive"];

  const className = [
    classNames["hamburger"],
    props.isActive ? classNames["is-active"] : "",
    props.className ? props.className : "",
  ].join(" ");

  return (
    <div {...assignedProps} role="button" className={className}>
      <span className={classNames["crown"]}></span>
      <span className={classNames["upperpatty"]} aria-hidden="true"></span>
      <span className={classNames["club"]} aria-hidden="true"></span>
      <span className={classNames["lowerpatty"]} aria-hidden="true"></span>
      <span className={classNames["heel"]}></span>
    </div>
  );
}
