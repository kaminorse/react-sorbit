import SorbitCssVariableStylesProvider from "../SorbitCssVariableStylesProvider/SorbitCssVariableStylesProvider";
import { Soroot } from "../Soroot";
import "./Sorbit.scss";
import SorbitProps from "./SorbitProps";

export default function Sorbit(props: SorbitProps) {
  return (
    <>
      <SorbitCssVariableStylesProvider
        cssVariableSetting={props.cssVariableSetting}
      >
        <Soroot colorScheme={props.colorScheme}>{props.children}</Soroot>
      </SorbitCssVariableStylesProvider>
    </>
  );
}
