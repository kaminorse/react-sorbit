import SorbitCssVariableStylesProviderStatic from "../SorbitCssVariableStylesProviderStatic/SorbitCssVariableStylesProviderStatic";
import { Soroot } from "../Soroot";
import "./SorbitStatic.scss";
import SorbitStaticProps from "./SorbitStaticProps";

export default function SorbitStatic(props: SorbitStaticProps) {
  const assignedProps = { ...props };
  delete assignedProps["cssVariableSetting"];

  return (
    <>
      <SorbitCssVariableStylesProviderStatic
        cssVariableSetting={props.cssVariableSetting}
      >
        <Soroot {...assignedProps} />
      </SorbitCssVariableStylesProviderStatic>
    </>
  );
}
