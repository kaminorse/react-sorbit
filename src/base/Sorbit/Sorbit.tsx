"use client";
import { useInsertionEffect, useMemo } from "react";
import { SorbitColorSchemeContext } from "../../contexts";
import sorbitStyleUtility from "../../utilities/sorbitStyleUtility";
import { Soroot } from "../Soroot";
import "./Sorbit.scss";
import SorbitProps from "./SorbitProps";

export default function Sorbit(props: SorbitProps) {
  const assignedProps = { ...props };
  delete assignedProps["cssVariableSetting"];

  const elementId = "sorbit-css-variable-style";

  const sorbitStyles = useMemo(
    () =>
      sorbitStyleUtility.getSorbitCssVariableStyles(props.cssVariableSetting),
    [props.cssVariableSetting]
  );

  useInsertionEffect(() => {
    const currentSorbitStyleElement = document.head.querySelector(
      `#${elementId}`
    );
    if (currentSorbitStyleElement) {
      currentSorbitStyleElement.remove();
    }
    const styleElement = document.createElement("style");
    styleElement.id = elementId;
    styleElement.innerHTML = sorbitStyles;
    document.head.appendChild(styleElement);
  }, [sorbitStyles]);

  return (
    <SorbitColorSchemeContext.Provider
      value={assignedProps.colorScheme ? assignedProps.colorScheme : "light"}
    >
      <Soroot {...assignedProps} />
    </SorbitColorSchemeContext.Provider>
  );
}
