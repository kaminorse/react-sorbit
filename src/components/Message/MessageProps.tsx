import ColorType from "../../common/ColorType";

export default interface MessageProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  colorType?: ColorType;
}
