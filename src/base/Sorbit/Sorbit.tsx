
"use client";
import useSorbitCustomTheme from "../../hooks/useSorbitCustomTheme";
import { Soroot } from "../Soroot";
import "./Sorbit.scss";
import SorbitProps from "./SorbitProps";

/**
 *
 * @param props
 * @returns
 */
export default function Sorbit(props: SorbitProps) {
  const assignedProps = { ...props };
  delete assignedProps["cssVariableSetting"];

  useSorbitCustomTheme(props.cssVariableSetting);

  return <Soroot {...assignedProps} />;
}
