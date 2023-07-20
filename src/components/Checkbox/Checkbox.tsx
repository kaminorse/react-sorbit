import CheckboxProps from "./CheckboxProps";
import classNames from "./Checkbox.module.scss";

export default function Checkbox(props: CheckboxProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["colorType"];
  delete assignedProps["text"];

  const className = [
    classNames["checkbox"],
    props.colorType ? classNames[`is-${props.colorType}`] : "",
    props.className ? props.className : "",
  ].join(" ");

  return (
    <span id={props.id} className={className}>
      <input
        {...assignedProps}
        id={`${props.id ? props.id : ""}-input`}
        type={"checkbox"}
        className={classNames["checkbox-input"]}
      />
      <label
        id={`${props.id ? props.id : ""}-box`}
        className={classNames["checkbox-box"]}
        htmlFor={`${props.id ? props.id : ""}-input`}
      />
      <label
        id={`${props.id ? props.id : ""}-text`}
        className={classNames["checkbox-text"]}
        htmlFor={`${props.id ? props.id : ""}-input`}
      >
        {props.text}
      </label>
    </span>
  );
}
