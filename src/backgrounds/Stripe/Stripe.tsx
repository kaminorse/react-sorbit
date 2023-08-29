import StripeProps from "./StripeProps";
import classNames from "./Stripe.module.scss";
import classNameUtility from "../../utilities/classNameUtility";

export default function Stripe(props: StripeProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["patternColor"];
  //#region BaseComponentProps
  delete assignedProps["foreColor"];
  delete assignedProps["backColor"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames =
    classNameUtility.assignBaseComponentPropsClassNames(
      props,
      [classNames["stripe"]],
      classNames
    );
  // props.patternColor &&
  //   assignedClassNames.push(
  //     classNames[
  //       `is-${props.patternColor.name}-${props.patternColor.lightness}`
  //     ]
  //   );
  props.className && assignedClassNames.push(props.className);

  return <Stripe {...assignedProps} className={assignedClassNames.join(" ")} />;
}
