"use client";
import { useMemo } from "react";
import sorbitStyleUtility from "../../utilities/sorbitStyleUtility";
import "./SorbitCssVariableStylesProviderStatic.module.scss";
import SorbitCssVariableStylesProviderStaticProps from "./SorbitCssVariableStylesProviderStaticProps";

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
