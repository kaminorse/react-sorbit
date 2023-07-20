import ButtonProps from "./ButtonProps";
import classNames from "./Button.module.scss";

export default function Button(props: ButtonProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["colorType"];

  const className = [
    classNames["button"],
    props.colorType ? classNames[`is-${props.colorType}`] : "",
    props.className ? props.className : "",
  ].join(" ");

  return (
    <button
      {...props}
      className={className}
    />
  );
}
