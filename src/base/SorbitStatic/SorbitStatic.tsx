import SorbitStaticProps from "./SorbitStaticProps";
import "./SorbitStatic.module.scss";
import Tabula from "../Tabula";
import SorbitCssVariableStylesProviderStatic from "../SorbitCssVariableStylesProviderStatic/SorbitCssVariableStylesProviderStatic";

export default function SorbitStatic(props: SorbitStaticProps) {
  return (
    <>
      <SorbitCssVariableStylesProviderStatic
        cssVariableSetting={props.cssVariableSetting}
      >
        <Tabula colorScheme={props.colorScheme}>{props.children}</Tabula>
      </SorbitCssVariableStylesProviderStatic>
    </>
  );
}
