import { ColorName } from "../../common/literalTypes";
import { BaseComponentProps } from "../../common/models";
import { DivProps } from "../../react-sorbit";

export default interface DotProps extends DivProps, BaseComponentProps {
  as?: React.ElementType | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  colorName?: ColorName;
}
