import SorbitCssVariableStylesProviderStatic from "../SorbitCssVariableStylesProviderStatic/SorbitCssVariableStylesProviderStatic";
import Tabula from "../Tabula";
import "./SorbitStatic.module.scss";
import SorbitStaticProps from "./SorbitStaticProps";

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
