import { ColorScheme } from "../../common/literalTypes";
import { PropsWithChildren } from "react";

export default interface SorootProps extends PropsWithChildren {
  colorScheme?: ColorScheme;
}
