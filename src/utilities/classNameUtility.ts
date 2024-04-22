import BaseComponentProps from "../common/models/BaseComponentProps";

function assignBaseComponentPropsClassNames<Props extends BaseComponentProps>(
  props: Props,
  classNames: string[],
  css: CSSModuleClasses
): string[] {
  const assignedClassNames = [...classNames];
  if (props.fore) {
    if (props.fore.color) {
      props.fore.color.default &&
        assignedClassNames.push(
          css[
            `forecolor-${props.fore.color.default.name}-${props.fore.color.default.lightness}`
          ]
        );
      props.fore.color.hover &&
        assignedClassNames.push(
          css[
            `forecolor-${props.fore.color.hover.name}-hover-${props.fore.color.hover.lightness}`
          ]
        );
      props.fore.color.focus &&
        assignedClassNames.push(
          css[
            `forecolor-${props.fore.color.focus.name}-focus-${props.fore.color.focus.lightness}`
          ]
        );
      props.fore.color.active &&
        assignedClassNames.push(
          css[
            `forecolor-${props.fore.color.active.name}-active-${props.fore.color.active.lightness}`
          ]
        );
      props.fore.color.disabled &&
        assignedClassNames.push(
          css[
            `forecolor-${props.fore.color.disabled.name}-disabled-${props.fore.color.disabled.lightness}`
          ]
        );
    }
    props.fore.fontSize &&
      assignedClassNames.push(css[`is-font-size-${props.fore.fontSize}`]);
    props.fore.fontWeight &&
      assignedClassNames.push(css[`is-font-weight-${props.fore.fontWeight}`]);
    props.fore.isItalic && assignedClassNames.push(css[`is-italic`]);
  }

  if (props.back) {
    if (props.back.color) {
      props.back.color.default &&
        assignedClassNames.push(
          css[
            `backcolor-${props.back.color.default.name}-${props.back.color.default.lightness}`
          ]
        );
      props.back.color.hover &&
        assignedClassNames.push(
          css[
            `backcolor-${props.back.color.hover.name}-hover-${props.back.color.hover.lightness}`
          ]
        );
      props.back.color.focus &&
        assignedClassNames.push(
          css[
            `backcolor-${props.back.color.focus.name}-focus-${props.back.color.focus.lightness}`
          ]
        );
      props.back.color.active &&
        assignedClassNames.push(
          css[
            `backcolor-${props.back.color.active.name}-active-${props.back.color.active.lightness}`
          ]
        );
      props.back.color.disabled &&
        assignedClassNames.push(
          css[
            `backcolor-${props.back.color.disabled.name}-disabled-${props.back.color.disabled.lightness}`
          ]
        );
    }
  }

  if (props.highlighter) {
    if (props.highlighter.color) {
      props.highlighter.color.default &&
        assignedClassNames.push(
          css[
            `highlighter-${props.highlighter.color.default.name}-${props.highlighter.color.default.lightness}`
          ]
        );
      props.highlighter.color.hover &&
        assignedClassNames.push(
          css[
            `highlighter-${props.highlighter.color.hover.name}-hover-${props.highlighter.color.hover.lightness}`
          ]
        );
      props.highlighter.color.focus &&
        assignedClassNames.push(
          css[
            `highlighter-${props.highlighter.color.focus.name}-focus-${props.highlighter.color.focus.lightness}`
          ]
        );
      props.highlighter.color.active &&
        assignedClassNames.push(
          css[
            `highlighter-${props.highlighter.color.active.name}-active-${props.highlighter.color.active.lightness}`
          ]
        );
      props.highlighter.color.disabled &&
        assignedClassNames.push(
          css[
            `highlighter-${props.highlighter.color.disabled.name}-disabled-${props.highlighter.color.disabled.lightness}`
          ]
        );
    }
  }

  if (props.border) {
    assignedClassNames.push(css[`has-border-${props.border.style}`]);

    if (props.border.color) {
      props.border.color.default &&
        assignedClassNames.push(
          css[
            `bordercolor-${props.border.color.default.name}-${props.border.color.default.lightness}`
          ]
        );
      props.border.color.hover &&
        assignedClassNames.push(
          css[
            `bordercolor-${props.border.color.hover.name}-hover-${props.border.color.hover.lightness}`
          ]
        );
      props.border.color.focus &&
        assignedClassNames.push(
          css[
            `bordercolor-${props.border.color.focus.name}-focus-${props.border.color.focus.lightness}`
          ]
        );
      props.border.color.active &&
        assignedClassNames.push(
          css[
            `bordercolor-${props.border.color.active.name}-active-${props.border.color.active.lightness}`
          ]
        );
      props.border.color.disabled &&
        assignedClassNames.push(
          css[
            `bordercolor-${props.border.color.disabled.name}-disabled-${props.border.color.disabled.lightness}`
          ]
        );
    }

    props.border.collapse &&
      assignedClassNames.push(css[`is-border-${props.border.collapse}`]);

    props.border.radius &&
      assignedClassNames.push(css[`is-border-radius-${props.border.radius}`]);

    props.border.width &&
      assignedClassNames.push(css[`is-border-width-${props.border.width}`]);
  }

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
      assignedClassNames.push(css[`mr-${props.spacing.margin.right}rem`]);
    }
  }

  if (props.spacing && props.spacing.margin && props.spacing.margin.bottom) {
    if (props.spacing.margin.bottom === "auto") {
      assignedClassNames.push(css[`mb-auto`]);
    } else {
      assignedClassNames.push(css[`mb-${props.spacing.margin.bottom}rem`]);
    }
  }

  if (props.spacing && props.spacing.margin && props.spacing.margin.left) {
    if (props.spacing.margin.left === "auto") {
      assignedClassNames.push(css[`ml-auto`]);
    } else {
      assignedClassNames.push(css[`ml-${props.spacing.margin.left}rem`]);
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
      assignedClassNames.push(css[`pr-${props.spacing.padding.right}rem`]);
    }
  }

  if (props.spacing && props.spacing.padding && props.spacing.padding.bottom) {
    if (props.spacing.padding.bottom === "auto") {
      assignedClassNames.push(css[`pb-auto`]);
    } else {
      assignedClassNames.push(css[`pb-${props.spacing.padding.bottom}rem`]);
    }
  }

  if (props.spacing && props.spacing.padding && props.spacing.padding.left) {
    if (props.spacing.padding.left === "auto") {
      assignedClassNames.push(css[`pl-auto`]);
    } else {
      assignedClassNames.push(css[`pl-${props.spacing.padding.left}rem`]);
    }
  }
  return assignedClassNames;
}

const classNameUtility = {
  assignBaseComponentPropsClassNames,
};

export default classNameUtility;
