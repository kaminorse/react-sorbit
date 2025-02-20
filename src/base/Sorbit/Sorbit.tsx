import SorbitCssVariableStylesProvider from "../SorbitCssVariableStylesProvider/SorbitCssVariableStylesProvider";
import { Soroot } from "../Soroot";
import "./Sorbit.scss";
import SorbitProps from "./SorbitProps";

export default function Sorbit(props: SorbitProps) {
  const assignedProps = { ...props };
  delete assignedProps["cssVariableSetting"];

  return (
    <>
      <SorbitCssVariableStylesProvider
        cssVariableSetting={props.cssVariableSetting}
      >
        <Soroot {...assignedProps} />
      </SorbitCssVariableStylesProvider>
    </>
  );
}
