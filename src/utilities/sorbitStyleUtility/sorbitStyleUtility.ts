import SorbitCssVariable from "../../common/models/SorbitCssVariable";
import {
  ComponentPart,
  ComponentStatePseudoClass,
  Oklch,
} from "../../common/models";

const prefix = "sorbit-";

function getComponentColorVariables(
  colorName: string,
  componentPart?: ComponentPart,
  componentStateName?: string,
  elementName?: string
): string[] {
  const styles: string[] = [];

  if (componentPart) {
    if (componentPart.fore) {
      styles.push(
        `--${prefix}color-${colorName}${
          componentStateName ? `-${componentStateName}` : ``
        }${elementName ? `-${elementName}` : ``}-fore: ${
          componentPart.fore.startsWith(`--${prefix}`)
            ? `var(${componentPart.fore});`
            : `${componentPart.fore};`
        }`
      );
    }
    if (componentPart.back) {
      styles.push(
        `--${prefix}color-${colorName}${
          componentStateName ? `-${componentStateName}` : ``
        }${elementName ? `-${elementName}` : ``}-back: ${
          componentPart.back.startsWith(`--${prefix}`)
            ? `var(${componentPart.back});`
            : `${componentPart.back};`
        }`
      );
    }
    if (componentPart.border) {
      styles.push(
        `--${prefix}color-${colorName}${
          componentStateName ? `-${componentStateName}` : ``
        }${elementName ? `-${elementName}` : ``}-border: ${
          componentPart.border.startsWith(`--${prefix}`)
            ? `var(${componentPart.border});`
            : `${componentPart.border};`
        }`
      );
    }
    if (componentPart.shadow) {
      styles.push(
        `--${prefix}color-${colorName}${
          componentStateName ? `-${componentStateName}` : ``
        }${elementName ? `-${elementName}` : ``}-shadow: ${
          componentPart.shadow.startsWith(`--${prefix}`)
            ? `var(${componentPart.shadow});`
            : `${componentPart.shadow};`
        }`
      );
    }
    if (componentPart.placeholder) {
      styles.push(
        `--${prefix}color-${colorName}${
          componentStateName ? `-${componentStateName}` : ``
        }${elementName ? `-${elementName}` : ``}-placeholder: ${
          componentPart.placeholder.startsWith(`--${prefix}`)
            ? `var(${componentPart.placeholder});`
            : `${componentPart.placeholder};`
        }`
      );
    }
  }
  return styles;
}

function getColorVariables(
  colorName: string,
  componentState: ComponentStatePseudoClass,
  elementName?: string
) {
  const derives: string[] = [];
  if (componentState.default) {
    const styles = getComponentColorVariables(
      colorName,
      componentState.default,
      undefined,
      elementName
    );
    if (styles.length > 0) {
      derives.push(...styles);
    }
  }

  if (componentState.hover) {
    const styles = getComponentColorVariables(
      colorName,
      componentState.hover,
      `hover`,
      elementName
    );
    if (styles.length > 0) {
      derives.push(...styles);
    }
  }

  if (componentState.focus) {
    const styles = getComponentColorVariables(
      colorName,
      componentState.focus,
      `focus`,
      elementName
    );
    if (styles.length > 0) {
      derives.push(...styles);
    }
  }

  if (componentState.active) {
    const styles = getComponentColorVariables(
      colorName,
      componentState.active,
      `active`,
      elementName
    );
    if (styles.length > 0) {
      derives.push(...styles);
    }
  }

  if (componentState.disabled) {
    const styles = getComponentColorVariables(
      colorName,
      componentState.disabled,
      `disabled`,
      elementName
    );
    if (styles.length > 0) {
      derives.push(...styles);
    }
  }

  return derives;
}

function getSorbitCssVariableStyles(
  cssVariableSetting?: SorbitCssVariable
): string[] {
  const sorbitStyles: string[] = [];

  const rootStyles = getRootStyles(cssVariableSetting);
  const lightSchemeStyles = getLightSchemeStyles(cssVariableSetting);
  const darkSchemeStyles = getDarkSchemeStyles(cssVariableSetting);

  rootStyles.length > 0 && sorbitStyles.push(`:root{${rootStyles.join(``)}}`);
  lightSchemeStyles.length > 0 &&
    sorbitStyles.push(`:root{${lightSchemeStyles.join(``)}}`);
  lightSchemeStyles.length > 0 &&
    sorbitStyles.push(
      `[data-color-scheme="light"]{${lightSchemeStyles.join(``)}}`
    );
  darkSchemeStyles.length > 0 &&
    sorbitStyles.push(
      `[data-color-scheme="dark"]{${darkSchemeStyles.join(``)}}`
    );

  return sorbitStyles;
}

function getRootStyles(cssVariableSetting?: SorbitCssVariable): string[] {
  const rootStyles: string[] = [];

  if (cssVariableSetting) {
    if (cssVariableSetting.color) {
      const color = cssVariableSetting.color;
      const setColorDetailVariable = (
        colorName: string,
        lightness: string,
        oklch?: Oklch
      ) => {
        if (oklch) {
          rootStyles.push(
            `--${prefix}color-${colorName}-${lightness}-oklch: ${oklch.lightness}% ${oklch.chroma} ${oklch.hue};`
          );
          rootStyles.push(
            `--${prefix}color-${colorName}-${lightness}: oklch(var(--${prefix}color-${colorName}-${lightness}-oklch));`
          );
        }
      };

      if (color.white) {
        if (typeof color.white === `string`) {
          rootStyles.push(`--${prefix}color-white: ${color.white};`);
        } else {
          rootStyles.push(
            `--${prefix}color-white-oklch: ${color.white.lightness}% ${color.white.chroma} ${color.white.hue};`
          );
          rootStyles.push(
            `--${prefix}color-white: oklch(var(--${prefix}color-white-oklch));`
          );
        }
      }

      if (color.black) {
        if (typeof color.black === `string`) {
          rootStyles.push(`--${prefix}color-black: ${color.black};`);
        } else {
          rootStyles.push(
            `--${prefix}color-black-oklch: ${color.black.lightness}% ${color.black.chroma} ${color.black.hue};`
          );
          rootStyles.push(
            `--${prefix}color-black: oklch(var(--${prefix}color-black-oklch));`
          );
        }
      }

      if (color.gray) {
        const gradation = color.gray;
        const colorName = `gray`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.red) {
        const gradation = color.red;
        const colorName = `red`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.orange) {
        const gradation = color.orange;
        const colorName = `orange`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.yellow) {
        const gradation = color.yellow;
        const colorName = `yellow`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.green) {
        const gradation = color.green;
        const colorName = `green`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.cyan) {
        const gradation = color.cyan;
        const colorName = `cyan`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.blue) {
        const gradation = color.blue;
        const colorName = `blue`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.violet) {
        const gradation = color.violet;
        const colorName = `violet`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.magenta) {
        const gradation = color.magenta;
        const colorName = `magenta`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }
    }

    if (cssVariableSetting.typography) {
      const typography = cssVariableSetting.typography;
      if (typography.fontSize) {
        if (typography.fontSize.small) {
          rootStyles.push(`--${prefix}font-size-small: ${typography.fontSize.small};`);
        }
        if (typography.fontSize.normal) {
          rootStyles.push(`--${prefix}font-size-normal: ${typography.fontSize.normal};`);
        }
        if (typography.fontSize.medium) {
          rootStyles.push(`--${prefix}font-size-medium: ${typography.fontSize.medium};`);
        }
        if (typography.fontSize.large) {
          rootStyles.push(`--${prefix}font-size-large: ${typography.fontSize.large};`);
        }
      }
      if (typography.fontWeight) {
        if (typography.fontWeight.light) {
          rootStyles.push(
            `--${prefix}font-weight-light: ${typography.fontWeight.light};`
          );
        }
        if (typography.fontWeight.normal) {
          rootStyles.push(
            `--${prefix}font-weight-normal: ${typography.fontWeight.normal};`
          );
        }
        if (typography.fontWeight.medium) {
          rootStyles.push(
            `--${prefix}font-weight-medium: ${typography.fontWeight.medium};`
          );
        }
        if (typography.fontWeight.semibold) {
          rootStyles.push(
            `--${prefix}font-weight-semibold: ${typography.fontWeight.semibold};`
          );
        }
        if (typography.fontWeight.bold) {
          rootStyles.push(`--${prefix}font-weight-bold: ${typography.fontWeight.bold};`);
        }
      }
    }
  }

  return rootStyles;
}

function getLightSchemeStyles(
  cssVariableSetting?: SorbitCssVariable
): string[] {
  const lightSchemeStyles: string[] = [];

  if (cssVariableSetting) {
    if (cssVariableSetting.color) {
      const color = cssVariableSetting.color;
      if (color.light) {
        if (color.light.default) {
          const styles = getColorVariables(`default`, color.light.default);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.gray) {
          const styles = getColorVariables(`gray`, color.light.gray);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.red) {
          const styles = getColorVariables(`red`, color.light.red);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.orange) {
          const styles = getColorVariables(`orange`, color.light.orange);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.yellow) {
          const styles = getColorVariables(`yellow`, color.light.yellow);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.green) {
          const styles = getColorVariables(`green`, color.light.green);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.cyan) {
          const styles = getColorVariables(`cyan`, color.light.cyan);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.blue) {
          const styles = getColorVariables(`blue`, color.light.blue);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.violet) {
          const styles = getColorVariables(`violet`, color.light.violet);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }

        if (color.light.button) {
          if (color.light.button.default) {
            const styles = getColorVariables(
              `default`,
              color.light.button.default,
              `button`
            );
            if (styles.length > 0) {
              lightSchemeStyles.push(...styles);
            }
          }
          if (color.light.button.gray) {
            const styles = getColorVariables(
              `gray`,
              color.light.button.gray,
              `button`
            );
            if (styles.length > 0) {
              lightSchemeStyles.push(...styles);
            }
          }
          if (color.light.button.red) {
            const styles = getColorVariables(
              `red`,
              color.light.button.red,
              `button`
            );
            if (styles.length > 0) {
              lightSchemeStyles.push(...styles);
            }
          }
          if (color.light.button.orange) {
            const styles = getColorVariables(
              `orange`,
              color.light.button.orange,
              `button`
            );
            if (styles.length > 0) {
              lightSchemeStyles.push(...styles);
            }
          }
          if (color.light.button.yellow) {
            const styles = getColorVariables(
              `yellow`,
              color.light.button.yellow,
              `button`
            );
            if (styles.length > 0) {
              lightSchemeStyles.push(...styles);
            }
          }
          if (color.light.button.green) {
            const styles = getColorVariables(
              `green`,
              color.light.button.green,
              `button`
            );
            if (styles.length > 0) {
              lightSchemeStyles.push(...styles);
            }
          }
          if (color.light.button.cyan) {
            const styles = getColorVariables(
              `cyan`,
              color.light.button.cyan,
              `button`
            );
            if (styles.length > 0) {
              lightSchemeStyles.push(...styles);
            }
          }
          if (color.light.button.blue) {
            const styles = getColorVariables(
              `blue`,
              color.light.button.blue,
              `button`
            );
            if (styles.length > 0) {
              lightSchemeStyles.push(...styles);
            }
          }
          if (color.light.button.violet) {
            const styles = getColorVariables(
              `violet`,
              color.light.button.violet,
              `button`
            );
            if (styles.length > 0) {
              lightSchemeStyles.push(...styles);
            }
          }
          if (color.light.button.magenta) {
            const styles = getColorVariables(
              `magenta`,
              color.light.button.magenta,
              `button`
            );
            if (styles.length > 0) {
              lightSchemeStyles.push(...styles);
            }
          }
        }
      }
    }
  }

  return lightSchemeStyles;
}

function getDarkSchemeStyles(cssVariableSetting?: SorbitCssVariable): string[] {
  const darkSchemeStyles: string[] = [];

  if (cssVariableSetting) {
    if (cssVariableSetting.color) {
      const color = cssVariableSetting.color;
      if (color.dark) {
        if (color.dark.default) {
          const styles = getColorVariables(`default`, color.dark.default);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.gray) {
          const styles = getColorVariables(`gray`, color.dark.gray);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.red) {
          const styles = getColorVariables(`red`, color.dark.red);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.orange) {
          const styles = getColorVariables(`orange`, color.dark.orange);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.yellow) {
          const styles = getColorVariables(`yellow`, color.dark.yellow);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.green) {
          const styles = getColorVariables(`green`, color.dark.green);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.cyan) {
          const styles = getColorVariables(`cyan`, color.dark.cyan);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.blue) {
          const styles = getColorVariables(`blue`, color.dark.blue);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.violet) {
          const styles = getColorVariables(`violet`, color.dark.violet);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.magenta) {
          const styles = getColorVariables(`magenta`, color.dark.magenta);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }

        if (color.dark.button) {
          if (color.dark.button.default) {
            const styles = getColorVariables(
              `default`,
              color.dark.button.default,
              `button`
            );
            if (styles.length > 0) {
              darkSchemeStyles.push(...styles);
            }
          }
          if (color.dark.button.gray) {
            const styles = getColorVariables(
              `gray`,
              color.dark.button.gray,
              `button`
            );
            if (styles.length > 0) {
              darkSchemeStyles.push(...styles);
            }
          }
          if (color.dark.button.red) {
            const styles = getColorVariables(
              `red`,
              color.dark.button.red,
              `button`
            );
            if (styles.length > 0) {
              darkSchemeStyles.push(...styles);
            }
          }
          if (color.dark.button.orange) {
            const styles = getColorVariables(
              `orange`,
              color.dark.button.orange,
              `button`
            );
            if (styles.length > 0) {
              darkSchemeStyles.push(...styles);
            }
          }
          if (color.dark.button.yellow) {
            const styles = getColorVariables(
              `yellow`,
              color.dark.button.yellow,
              `button`
            );
            if (styles.length > 0) {
              darkSchemeStyles.push(...styles);
            }
          }
          if (color.dark.button.green) {
            const styles = getColorVariables(
              `green`,
              color.dark.button.green,
              `button`
            );
            if (styles.length > 0) {
              darkSchemeStyles.push(...styles);
            }
          }
          if (color.dark.button.cyan) {
            const styles = getColorVariables(
              `cyan`,
              color.dark.button.cyan,
              `button`
            );
            if (styles.length > 0) {
              darkSchemeStyles.push(...styles);
            }
          }
          if (color.dark.button.blue) {
            const styles = getColorVariables(
              `blue`,
              color.dark.button.blue,
              `button`
            );
            if (styles.length > 0) {
              darkSchemeStyles.push(...styles);
            }
          }
          if (color.dark.button.violet) {
            const styles = getColorVariables(
              `violet`,
              color.dark.button.violet,
              `button`
            );
            if (styles.length > 0) {
              darkSchemeStyles.push(...styles);
            }
          }
          if (color.dark.button.magenta) {
            const styles = getColorVariables(
              `magenta`,
              color.dark.button.magenta,
              `button`
            );
            if (styles.length > 0) {
              darkSchemeStyles.push(...styles);
            }
          }
        }
      }
    }
  }

  return darkSchemeStyles;
}

const sorbitStyleUtility = {
  getSorbitCssVariableStyles,
  getRootStyles,
  getLightSchemeStyles,
  getDarkSchemeStyles,
};

export default sorbitStyleUtility;
