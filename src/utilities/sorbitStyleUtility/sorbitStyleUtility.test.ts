import { expect, test } from "vitest";
import sorbitStyleUtility from "./sorbitStyleUtility";
import { SorbitCssVariable } from "../../react-sorbit";

const colors: string[] = [
  "gray",
  "red",
  "orange",
  "yellow",
  "green",
  "cyan",
  "blue",
  "violet",
  "magenta",
];

const colorchromaGray = 0.04;
const colorchromaColorful = 0.11;

test("change color black.", () => {
  const cssVariables: SorbitCssVariable = {
    color: {
      black: {
        hue: 190,
        lightness: 13,
        chroma: colorchromaGray,
      },
    },
  };

  expect(
    sorbitStyleUtility.getSorbitCssVariableStyles(cssVariables)
  ).toStrictEqual([":root{--sorbit-color-black-oklch: 13% 0.04 190;--sorbit-color-black: oklch(var(--sorbit-color-black-oklch));}"]);
});

test("change color white.", () => {
  const cssVariables: SorbitCssVariable = {
    color: {
      white: {
        hue: 190,
        lightness: 98,
        chroma: colorchromaGray,
      },
    },
  };

  expect(
    sorbitStyleUtility.getSorbitCssVariableStyles(cssVariables)
  ).toStrictEqual([":root{--sorbit-color-white-oklch: 98% 0.04 190;--sorbit-color-white: oklch(var(--sorbit-color-white-oklch));}"]);
});

colors.forEach((color) => {
  for (let i = 19; i >= 1; i--) {
    const gradation = i * 50;
    test(`change color ${color}[${gradation}]`, () => {
      const cssVariables: SorbitCssVariable = {
        color: {
          [color]: {
            [gradation]: {
              hue: 0,
              lightness: 98,
              chroma: colorchromaColorful,
            },
          },
        },
      };
      const gradStr = gradation < 100 ? "050" : `${gradation}`;
      expect(
        sorbitStyleUtility.getSorbitCssVariableStyles(cssVariables)
      ).toStrictEqual([
        `:root{--sorbit-color-${color}-${gradStr}-oklch: 98% 0.11 0;--sorbit-color-${color}-${gradStr}: oklch(var(--sorbit-color-${color}-${gradStr}-oklch));}`,
      ]);
    });
  }
});
