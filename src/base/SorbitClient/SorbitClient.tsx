"use client";
import { useInsertionEffect, useMemo } from "react";
import sorbitStyleUtility from "../../utilities/sorbitStyleUtility";
import { Soroot } from "../Soroot";
import "./SorbitClient.scss";
import SorbitClientProps from "./SorbitClientProps";

/** @deprecated */
export default function SorbitClient(props: SorbitClientProps) {
  const assignedProps = { ...props };
  delete assignedProps["cssVariableSetting"];

  const elementId = "sorbit-css-variable-style";

  const sorbitStyles = useMemo(
    () => sorbitStyleUtility.getSorbitCssVariableStyles(props.cssVariableSetting),
    [props.cssVariableSetting]
  );

  useInsertionEffect(() => {
    const currentSorbitStyleElement = document.getElementById(elementId);
    if (currentSorbitStyleElement) {
      currentSorbitStyleElement.remove();
    }
    const styleElement = document.createElement("style");
    styleElement.id = elementId;
    styleElement.innerHTML = sorbitStyles;
    document.head.appendChild(styleElement);
  }, [sorbitStyles]);

  return <Soroot {...assignedProps} />;
}
