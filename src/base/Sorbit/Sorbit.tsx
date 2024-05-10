import SorbitCssVariableStylesProvider from "../SorbitCssVariableStylesProvider/SorbitCssVariableStylesProvider";
import { Tabula } from "../Tabula";
import "./Sorbit.scss";
import SorbitProps from "./SorbitProps";

export default function Sorbit(props: SorbitProps) {
  return (
    <>
      <SorbitCssVariableStylesProvider
        cssVariableSetting={props.cssVariableSetting}
      >
        <Tabula colorScheme={props.colorScheme}>{props.children}</Tabula>
      </SorbitCssVariableStylesProvider>
    </>
  );
}
