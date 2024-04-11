"use client";
import "./SorbitCssVariableStylesProviderStatic.module.scss";
import sorbitStyleUtility from "../../utilities/sorbitStyleUtility";
import SorbitCssVariableStylesProviderStaticProps from "./SorbitCssVariableStylesProviderStaticProps";
import { useMemo } from "react";

export default function SorbitCssVariableStylesProviderStatic(
  props: SorbitCssVariableStylesProviderStaticProps
) {
  const sorbitStyles = useMemo(
    () =>
      sorbitStyleUtility.getSorbitCssVariableStyles(props.cssVariableSetting),
    [props.cssVariableSetting]
  );

  return (
    <>
      {sorbitStyles.length > 0 && (
        <style suppressHydrationWarning={true}>{sorbitStyles}</style>
      )}
      {props.children}
    </>
  );
}
