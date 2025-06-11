import { Soroot } from "../Soroot";
import "./SorbitClient.scss";
import SorbitClientProps from "./SorbitClientProps";
import useSorbitCustomTheme from "../../hooks/useSorbitCustomTheme/useSorbitCustomTheme";

/** @deprecated */
export default function SorbitClient(props: SorbitClientProps) {
  const assignedProps = { ...props };
  delete assignedProps["cssVariableSetting"];

  useSorbitCustomTheme(props.cssVariableSetting);

  return <Soroot {...assignedProps} />;
}
