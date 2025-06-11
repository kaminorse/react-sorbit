"use client";
import {
  useInsertionEffect,
  useMemo,
} from "react";
import sorbitStyleUtility from "../../utilities/sorbitStyleUtility";
import SorbitCssVariable from "../../common/models/SorbitCssVariable";

const elementId = "sorbit-css-variable-style";

const canUseDom =
  typeof window !== "undefined" &&
  typeof window.document !== "undefined" &&
  typeof window.document.createElement !== "undefined";

export default function useSorbitCustomTheme(
  cssVariableSetting?: SorbitCssVariable
) {
  if (!cssVariableSetting) {
    return;
  }

  if (!canUseDom) {
    const sorbitCssVariableStyle = (
      <style id={elementId}>
        {sorbitStyleUtility.getSorbitCssVariableStyles(cssVariableSetting)}
      </style>
    );

    return sorbitCssVariableStyle;
  }

  const sorbitStyles = useMemo(
    () => sorbitStyleUtility.getSorbitCssVariableStyles(cssVariableSetting),
    [cssVariableSetting]
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

  return undefined;
}
