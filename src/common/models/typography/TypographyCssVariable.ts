export default interface TypographyCssVariable {
  fontSize?: {
    small?: string | undefined;
    normal?: string | undefined;
    medium?: string | undefined;
    large?: string | undefined;
  };
  fontWeight?: {
    light?: number | undefined;
    normal?: number | undefined;
    medium?: number | undefined;
    semibold?: number | undefined;
    bold?: number | undefined;
  };
}
