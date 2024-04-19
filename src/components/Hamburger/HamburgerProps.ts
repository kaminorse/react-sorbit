import BaseComponentProps from "@/common/models/BaseComponentProps";

export default interface HamburgerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >, BaseComponentProps {
  isActive?: boolean | undefined;
  crownInner?: JSX.Element | string | undefined;
  heelInner?: JSX.Element | string | undefined;
}
