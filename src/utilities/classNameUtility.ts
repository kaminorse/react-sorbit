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
      css[
        `highlighter-${props.highlighter.name}-${props.highlighter.lightness}`
      ]
    );

  if (props.spacing && props.spacing.margin && props.spacing.margin.top) {
    if (props.spacing.margin.top === "auto") {
      assignedClassNames.push(css[`margin-top-auto`]);
    } else {
      assignedClassNames.push(css[`margin-top-${props.spacing.margin.top}rem`]);
    }
  }

  if (props.spacing && props.spacing.margin && props.spacing.margin.right) {
    if (props.spacing.margin.right === "auto") {
      assignedClassNames.push(css[`margin-right-auto`]);
    } else {
      assignedClassNames.push(
        css[`margin-right-${props.spacing.margin.right}rem`]
      );
    }
  }

  if (props.spacing && props.spacing.margin && props.spacing.margin.bottom) {
    if (props.spacing.margin.bottom === "auto") {
      assignedClassNames.push(css[`margin-bottom-auto`]);
    } else {
      assignedClassNames.push(
        css[`margin-bottom-${props.spacing.margin.bottom}rem`]
      );
    }
  }

  if (props.spacing && props.spacing.margin && props.spacing.margin.left) {
    if (props.spacing.margin.left === "auto") {
      assignedClassNames.push(css[`margin-left-auto`]);
    } else {
      assignedClassNames.push(
        css[`margin-left-${props.spacing.margin.left}rem`]
      );
    }
  }
  return assignedClassNames;
}

const classNameUtility = {
  assignBaseComponentPropsClassNames,
};

export default classNameUtility;
