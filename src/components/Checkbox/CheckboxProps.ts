import ColorType from "../../common/ColorType";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface CheckboxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  colorType?: ColorType;
  text?: string | JSX.Element;
}
