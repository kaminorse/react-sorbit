import { ColorName } from "../../common/literalTypes";
import { BaseComponentProps } from "../../common/models";
import { DivProps } from "../../react-sorbit";

export default interface StripeProps extends DivProps, BaseComponentProps {
  as?: React.ElementType | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  colorName?: ColorName;
  degree?: 0 | 15 | 30 | 45 | 60 | 75 | 90 | 105 | 120 | 135 | 150 | 165 | 180;
}
