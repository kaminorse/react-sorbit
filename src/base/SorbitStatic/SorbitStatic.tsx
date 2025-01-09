import SorbitCssVariableStylesProviderStatic from "../SorbitCssVariableStylesProviderStatic/SorbitCssVariableStylesProviderStatic";
import { Soroot } from "../Soroot";
import "./SorbitStatic.scss";
import SorbitStaticProps from "./SorbitStaticProps";

export default function SorbitStatic(props: SorbitStaticProps) {
  return (
    <>
      <SorbitCssVariableStylesProviderStatic
        cssVariableSetting={props.cssVariableSetting}
      >
        <Soroot colorScheme={props.colorScheme}>{props.children}</Soroot>
      </SorbitCssVariableStylesProviderStatic>
    </>
  );
}
