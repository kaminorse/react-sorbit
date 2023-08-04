import BaseComponentProps from "../../common/models/BaseComponentProps";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface ColumnProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    BaseComponentProps {
  isFull?: boolean;
  size?: number | undefined;
  sizeMobile?: number | undefined;
  sizeMobileOrMore?: number | undefined;
  sizeTabletOrLess?: number | undefined;
  sizeTablet?: number | undefined;
  sizeTabletOrMore?: number | undefined;
  sizeDesktopOrLess?: number | undefined;
  sizeDesktop?: number | undefined;
  sizeDesktopOrMore?: number | undefined;
  sizeWidescreenOrLess?: number | undefined;
  sizeWidescreen?: number | undefined;
  sizeWidescreenOrMore?: number | undefined;
  sizeFullhdOrLess?: number | undefined;
  sizeFullhd?: number | undefined;
}
