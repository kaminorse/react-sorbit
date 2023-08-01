import classNames from "./Container.module.scss";
import ContainerProps from "./ContainerProps";

export default function Container(props: ContainerProps): JSX.Element {
  const assignedProps = { ...props };

  const className = [
    classNames["container"],
    props.className ? props.className : "",
  ].join(" ");

  return (
    <div {...assignedProps} className={className} />
  );
}
