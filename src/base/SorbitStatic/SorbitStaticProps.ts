import { SorbitCssVariable } from "../../common/models";
import { SorootProps } from "../Soroot";

export default interface SorbitStaticProps extends SorootProps {
  cssVariableSetting?: SorbitCssVariable;
}
