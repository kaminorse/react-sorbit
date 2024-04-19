import sorbitStyleUtility from "../../utilities/sorbitStyleUtility";
import "./SorbitCssVariableStylesProvider.module.scss";
import SorbitCssVariableStylesProviderProps from "./SorbitCssVariableStylesProviderProps";

export default function SorbitCssVariableStylesProvider(
  props: SorbitCssVariableStylesProviderProps
) {
  const sorbitStyles = sorbitStyleUtility.getSorbitCssVariableStyles(
    props.cssVariableSetting
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
