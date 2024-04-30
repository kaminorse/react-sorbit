import { classNameUtility } from "../../utilities";
import classNames from "./Stripe.module.scss";
import StripeProps from "./StripeProps";

export default function Stripe(props: StripeProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["patternColor"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["stripe"]];
  props.patternColor &&
    assignedClassNames.push(
      classNames[
        `is-${props.patternColor.name}-${props.patternColor.lightness}`
      ]
    );
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return <Stripe {...assignedProps} className={assignedClassNames.join(" ")} />;
}
