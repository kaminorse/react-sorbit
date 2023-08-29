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
      assignedClassNames.push(css[`mt-auto`]);
    } else {
      assignedClassNames.push(css[`mt-${props.spacing.margin.top}rem`]);
    }
  }

  if (props.spacing && props.spacing.margin && props.spacing.margin.right) {
    if (props.spacing.margin.right === "auto") {
      assignedClassNames.push(css[`mr-auto`]);
    } else {
      assignedClassNames.push(
        css[`mr-${props.spacing.margin.right}rem`]
      );
    }
  }

  if (props.spacing && props.spacing.margin && props.spacing.margin.bottom) {
    if (props.spacing.margin.bottom === "auto") {
      assignedClassNames.push(css[`mb-auto`]);
    } else {
      assignedClassNames.push(
        css[`mb-${props.spacing.margin.bottom}rem`]
      );
    }
  }

  if (props.spacing && props.spacing.margin && props.spacing.margin.left) {
    if (props.spacing.margin.left === "auto") {
      assignedClassNames.push(css[`ml-auto`]);
    } else {
      assignedClassNames.push(
        css[`ml-${props.spacing.margin.left}rem`]
      );
    }
  }

  if (props.spacing && props.spacing.padding && props.spacing.padding.top) {
    if (props.spacing.padding.top === "auto") {
      assignedClassNames.push(css[`pt-auto`]);
    } else {
      assignedClassNames.push(css[`pt-${props.spacing.padding.top}rem`]);
    }
  }

  if (props.spacing && props.spacing.padding && props.spacing.padding.right) {
    if (props.spacing.padding.right === "auto") {
      assignedClassNames.push(css[`pr-auto`]);
    } else {
      assignedClassNames.push(
        css[`pr-${props.spacing.padding.right}rem`]
      );
    }
  }

  if (props.spacing && props.spacing.padding && props.spacing.padding.bottom) {
    if (props.spacing.padding.bottom === "auto") {
      assignedClassNames.push(css[`pb-auto`]);
    } else {
      assignedClassNames.push(
        css[`pb-${props.spacing.padding.bottom}rem`]
      );
    }
  }

  if (props.spacing && props.spacing.padding && props.spacing.padding.left) {
    if (props.spacing.padding.left === "auto") {
      assignedClassNames.push(css[`pl-auto`]);
    } else {
      assignedClassNames.push(
        css[`pl-${props.spacing.padding.left}rem`]
      );
    }
  }
  return assignedClassNames;
}

const classNameUtility = {
  assignBaseComponentPropsClassNames,
};

export default classNameUtility;
