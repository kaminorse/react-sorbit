import ComponentPart from "./ComponentPart";

export default interface ComponentStatePseudoClass {
  default?: ComponentPart | undefined;
  disabled?: ComponentPart | undefined;
  hovered?: ComponentPart | undefined;
  focused?: ComponentPart | undefined;
  active?: ComponentPart | undefined;
}