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
];

const colorSaturationGray = 18;
const colorSaturationColorful = 68;

test("change color black.", () => {
  const cssVariables: SorbitCssVariable = {
    color: {
      black: {
        hue: 190,
        lightness: 13,
        saturation: colorSaturationGray,
      },
    },
  };

  expect(
    sorbitStyleUtility.getSorbitCssVariableStyles(cssVariables)
  ).toStrictEqual([":root{--color-black: hsl(190, 18%, 13%);}"]);
});

test("change color white.", () => {
  const cssVariables: SorbitCssVariable = {
    color: {
      white: {
        hue: 190,
        lightness: 98,
        saturation: colorSaturationGray,
      },
    },
  };

  expect(
    sorbitStyleUtility.getSorbitCssVariableStyles(cssVariables)
  ).toStrictEqual([":root{--color-white: hsl(190, 18%, 98%);}"]);
});

colors.forEach((color) => {
  for (let i = 18; i >= 2; i--) {
    const gradation = i * 50;
    test(`change color ${color}[${gradation}]`, () => {
      const cssVariables: SorbitCssVariable = {
        color: {
          [color]: {
            [gradation]: {
              hue: 0,
              lightness: 98,
              saturation: colorSaturationColorful,
            },
          },
        },
      };
      expect(
        sorbitStyleUtility.getSorbitCssVariableStyles(cssVariables)
      ).toStrictEqual([
        `:root{--color-${color}-${gradation}-hsl: 0, 68%, 98%;--color-${color}-${gradation}: hsl(var(--color-${color}-${gradation}-hsl));}`,
      ]);
    });
  }
});
