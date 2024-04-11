import "./Sorbit.module.scss";
import SorbitProps from "./SorbitProps";
import Tabula from "../Tabula";
import SorbitCssVariableStylesProvider from "../SorbitCssVariableStylesProvider/SorbitCssVariableStylesProvider";

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
