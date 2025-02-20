import ComponentSchemeColor from "./ComponentSchemeColor";
import ComponentStatePseudoClass from "./ComponentStatePseudoClass";

export default interface SchemeColor {
  default?: ComponentStatePseudoClass | undefined;
  gray?: ComponentStatePseudoClass | undefined;
  red?: ComponentStatePseudoClass | undefined;
  orange?: ComponentStatePseudoClass | undefined;
  yellow?: ComponentStatePseudoClass | undefined;
  green?: ComponentStatePseudoClass | undefined;
  cyan?: ComponentStatePseudoClass | undefined;
  blue?: ComponentStatePseudoClass | undefined;
  violet?: ComponentStatePseudoClass | undefined;
  magenta?: ComponentStatePseudoClass | undefined;
  components?: {
    accordion?: ComponentSchemeColor & {
      accordionSummary?: ComponentSchemeColor;
      accordionDetails?: ComponentSchemeColor;
    };
    adminNav?: ComponentSchemeColor & {
      adminNavBrand?: ComponentSchemeColor;
      adminNavMenu?: ComponentSchemeColor;
      adminNavMenuItem?: ComponentSchemeColor;
    };
    badge?: ComponentSchemeColor;
    breadcrumb?: ComponentSchemeColor & {
      breadcrumbDivider?: ComponentSchemeColor;
    };
    button?: ComponentSchemeColor;
    card?: ComponentSchemeColor & {
      cardTitle?: ComponentSchemeColor;
      cardBody?: ComponentSchemeColor;
    };
    dialog?: ComponentSchemeColor & {
      dialogAvatar?: ComponentSchemeColor;
      dialogName?: ComponentSchemeColor;
      dialogMessage?: ComponentSchemeColor;
    };
  };
}
