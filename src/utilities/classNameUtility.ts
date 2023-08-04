import BaseComponentProps from "../common/models/BaseComponentProps";

function assignBaseComponentPropsClassNames<Props extends BaseComponentProps>(
  props: Props,
  classNames: string[],
  css: CSSModuleClasses
): string[] {
  const assignedClassNames = [...classNames];
  props.foreColor &&
    assignedClassNames.push(
      css[`forecolor-${props.foreColor.name}-${props.foreColor.lightness}`]
    );
  props.backColor &&
    assignedClassNames.push(
      css[`backcolor-${props.backColor.name}-${props.backColor.lightness}`]
    );
  props.highlighter &&
    assignedClassNames.push(
      css[`highlighter-${props.highlighter.name}-${props.highlighter.lightness}`]
    );
  return assignedClassNames;
}

const classNameUtility = {
  assignBaseComponentPropsClassNames,
};

export default classNameUtility;