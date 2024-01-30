import SorbitProps from "./SorbitProps";
import "./Sorbit.module.scss";
import Tabula from "../Tabula";
import { useEffect, useState } from "react";

export default function Sorbit(props: SorbitProps) {
  const [rootStyles, setRootStyles] = useState<string[]>([]);
  const [lightSchemeStyles, setLightSchemeStyles] = useState<string[]>([]);
  const [darkSchemeStyles, setDarkSchemeStyles] = useState<string[]>([]);

  useEffect(() => {
    const nextRootStyles: string[] = [];
    if (props.cssVariableSetting) {
      if (props.cssVariableSetting.color) {
        const color = props.cssVariableSetting.color;
        if (color.white) {
          nextRootStyles.push(`--color-white: ${color.white};`);
        }
        if (color.black) {
          nextRootStyles.push(`--color-black: ${color.black};`);
        }
        if (color.gray) {
          if (color.gray[950]) {
            nextRootStyles.push(
              `--color-gray-950-hsl: ${color.gray[950].hue}, ${color.gray[950].saturation}%, ${color.gray[950].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-950: hsl(var(--color-gray-950-hsl));`);
          }
          if (color.gray[900]) {
            nextRootStyles.push(
              `--color-gray-900-hsl: ${color.gray[900].hue}, ${color.gray[900].saturation}%, ${color.gray[900].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-900: hsl(var(--color-gray-900-hsl));`);
          }
          if (color.gray[850]) {
            nextRootStyles.push(
              `--color-gray-850-hsl: ${color.gray[850].hue}, ${color.gray[850].saturation}%, ${color.gray[850].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-850: hsl(var(--color-gray-850-hsl));`);
          }
          if (color.gray[800]) {
            nextRootStyles.push(
              `--color-gray-800-hsl: ${color.gray[800].hue}, ${color.gray[800].saturation}%, ${color.gray[800].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-800: hsl(var(--color-gray-800-hsl));`);
          }
          if (color.gray[750]) {
            nextRootStyles.push(
              `--color-gray-750-hsl: ${color.gray[750].hue}, ${color.gray[750].saturation}%, ${color.gray[750].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-750: hsl(var(--color-gray-750-hsl));`);
          }
          if (color.gray[700]) {
            nextRootStyles.push(
              `--color-gray-700-hsl: ${color.gray[700].hue}, ${color.gray[700].saturation}%, ${color.gray[700].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-700: hsl(var(--color-gray-700-hsl));`);
          }
          if (color.gray[650]) {
            nextRootStyles.push(
              `--color-gray-650-hsl: ${color.gray[650].hue}, ${color.gray[650].saturation}%, ${color.gray[650].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-650: hsl(var(--color-gray-650-hsl));`);
          }
          if (color.gray[600]) {
            nextRootStyles.push(
              `--color-gray-600-hsl: ${color.gray[600].hue}, ${color.gray[600].saturation}%, ${color.gray[600].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-600: hsl(var(--color-gray-600-hsl));`);
          }
          if (color.gray[550]) {
            nextRootStyles.push(
              `--color-gray-550-hsl: ${color.gray[550].hue}, ${color.gray[550].saturation}%, ${color.gray[550].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-550: hsl(var(--color-gray-550-hsl));`);
          }
          if (color.gray[500]) {
            nextRootStyles.push(
              `--color-gray-500-hsl: ${color.gray[500].hue}, ${color.gray[500].saturation}%, ${color.gray[500].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-500: hsl(var(--color-gray-500-hsl));`);
          }
          if (color.gray[450]) {
            nextRootStyles.push(
              `--color-gray-450-hsl: ${color.gray[450].hue}, ${color.gray[450].saturation}%, ${color.gray[450].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-450: hsl(var(--color-gray-450-hsl));`);
          }
          if (color.gray[400]) {
            nextRootStyles.push(
              `--color-gray-400-hsl: ${color.gray[400].hue}, ${color.gray[400].saturation}%, ${color.gray[400].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-400: hsl(var(--color-gray-400-hsl));`);
          }
          if (color.gray[350]) {
            nextRootStyles.push(
              `--color-gray-350-hsl: ${color.gray[350].hue}, ${color.gray[350].saturation}%, ${color.gray[350].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-350: hsl(var(--color-gray-350-hsl));`);
          }
          if (color.gray[300]) {
            nextRootStyles.push(
              `--color-gray-300-hsl: ${color.gray[300].hue}, ${color.gray[300].saturation}%, ${color.gray[300].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-300: hsl(var(--color-gray-300-hsl));`);
          }
          if (color.gray[250]) {
            nextRootStyles.push(
              `--color-gray-250-hsl: ${color.gray[250].hue}, ${color.gray[250].saturation}%, ${color.gray[250].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-250: hsl(var(--color-gray-250-hsl));`);
          }
          if (color.gray[200]) {
            nextRootStyles.push(
              `--color-gray-200-hsl: ${color.gray[200].hue}, ${color.gray[200].saturation}%, ${color.gray[200].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-200: hsl(var(--color-gray-200-hsl));`);
          }
          if (color.gray[150]) {
            nextRootStyles.push(
              `--color-gray-150-hsl: ${color.gray[150].hue}, ${color.gray[150].saturation}%, ${color.gray[150].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-150: hsl(var(--color-gray-150-hsl));`);
          }
          if (color.gray[100]) {
            nextRootStyles.push(
              `--color-gray-100-hsl: ${color.gray[100].hue}, ${color.gray[100].saturation}%, ${color.gray[100].lightness}%;`
            );
            nextRootStyles.push(`--color-gray-100: hsl(var(--color-gray-100-hsl));`);
          }
        }
        if (color.red) {
          if (color.red[950]) {
            nextRootStyles.push(
              `--color-red-950-hsl: ${color.red[950].hue}, ${color.red[950].saturation}%, ${color.red[950].lightness}%;`
            );
            nextRootStyles.push(`--color-red-950: hsl(var(--color-red-950-hsl));`);
          }
          if (color.red[900]) {
            nextRootStyles.push(
              `--color-red-900-hsl: ${color.red[900].hue}, ${color.red[900].saturation}%, ${color.red[900].lightness}%;`
            );
            nextRootStyles.push(`--color-red-900: hsl(var(--color-red-900-hsl));`);
          }
          if (color.red[850]) {
            nextRootStyles.push(
              `--color-red-850-hsl: ${color.red[850].hue}, ${color.red[850].saturation}%, ${color.red[850].lightness}%;`
            );
            nextRootStyles.push(`--color-red-850: hsl(var(--color-red-850-hsl));`);
          }
          if (color.red[800]) {
            nextRootStyles.push(
              `--color-red-800-hsl: ${color.red[800].hue}, ${color.red[800].saturation}%, ${color.red[800].lightness}%;`
            );
            nextRootStyles.push(`--color-red-800: hsl(var(--color-red-800-hsl));`);
          }
          if (color.red[750]) {
            nextRootStyles.push(
              `--color-red-750-hsl: ${color.red[750].hue}, ${color.red[750].saturation}%, ${color.red[750].lightness}%;`
            );
            nextRootStyles.push(`--color-red-750: hsl(var(--color-red-750-hsl));`);
          }
          if (color.red[700]) {
            nextRootStyles.push(
              `--color-red-700-hsl: ${color.red[700].hue}, ${color.red[700].saturation}%, ${color.red[700].lightness}%;`
            );
            nextRootStyles.push(`--color-red-700: hsl(var(--color-red-700-hsl));`);
          }
          if (color.red[650]) {
            nextRootStyles.push(
              `--color-red-650-hsl: ${color.red[650].hue}, ${color.red[650].saturation}%, ${color.red[650].lightness}%;`
            );
            nextRootStyles.push(`--color-red-650: hsl(var(--color-red-650-hsl));`);
          }
          if (color.red[600]) {
            nextRootStyles.push(
              `--color-red-600-hsl: ${color.red[600].hue}, ${color.red[600].saturation}%, ${color.red[600].lightness}%;`
            );
            nextRootStyles.push(`--color-red-600: hsl(var(--color-red-600-hsl));`);
          }
          if (color.red[550]) {
            nextRootStyles.push(
              `--color-red-550-hsl: ${color.red[550].hue}, ${color.red[550].saturation}%, ${color.red[550].lightness}%;`
            );
            nextRootStyles.push(`--color-red-550: hsl(var(--color-red-550-hsl));`);
          }
          if (color.red[500]) {
            nextRootStyles.push(
              `--color-red-500-hsl: ${color.red[500].hue}, ${color.red[500].saturation}%, ${color.red[500].lightness}%;`
            );
            nextRootStyles.push(`--color-red-500: hsl(var(--color-red-500-hsl));`);
          }
          if (color.red[450]) {
            nextRootStyles.push(
              `--color-red-450-hsl: ${color.red[450].hue}, ${color.red[450].saturation}%, ${color.red[450].lightness}%;`
            );
            nextRootStyles.push(`--color-red-450: hsl(var(--color-red-450-hsl));`);
          }
          if (color.red[400]) {
            nextRootStyles.push(
              `--color-red-400-hsl: ${color.red[400].hue}, ${color.red[400].saturation}%, ${color.red[400].lightness}%;`
            );
            nextRootStyles.push(`--color-red-400: hsl(var(--color-red-400-hsl));`);
          }
          if (color.red[350]) {
            nextRootStyles.push(
              `--color-red-350-hsl: ${color.red[350].hue}, ${color.red[350].saturation}%, ${color.red[350].lightness}%;`
            );
            nextRootStyles.push(`--color-red-350: hsl(var(--color-red-350-hsl));`);
          }
          if (color.red[300]) {
            nextRootStyles.push(
              `--color-red-300-hsl: ${color.red[300].hue}, ${color.red[300].saturation}%, ${color.red[300].lightness}%;`
            );
            nextRootStyles.push(`--color-red-300: hsl(var(--color-red-300-hsl));`);
          }
          if (color.red[250]) {
            nextRootStyles.push(
              `--color-red-250-hsl: ${color.red[250].hue}, ${color.red[250].saturation}%, ${color.red[250].lightness}%;`
            );
            nextRootStyles.push(`--color-red-250: hsl(var(--color-red-250-hsl));`);
          }
          if (color.red[200]) {
            nextRootStyles.push(
              `--color-red-200-hsl: ${color.red[200].hue}, ${color.red[200].saturation}%, ${color.red[200].lightness}%;`
            );
            nextRootStyles.push(`--color-red-200: hsl(var(--color-red-200-hsl));`);
          }
          if (color.red[150]) {
            nextRootStyles.push(
              `--color-red-150-hsl: ${color.red[150].hue}, ${color.red[150].saturation}%, ${color.red[150].lightness}%;`
            );
            nextRootStyles.push(`--color-red-150: hsl(var(--color-red-150-hsl));`);
          }
          if (color.red[100]) {
            nextRootStyles.push(
              `--color-red-100-hsl: ${color.red[100].hue}, ${color.red[100].saturation}%, ${color.red[100].lightness}%;`
            );
            nextRootStyles.push(`--color-red-100: hsl(var(--color-red-100-hsl));`);
          }
        }
        if (color.orange) {
          if (color.orange[950]) {
            nextRootStyles.push(
              `--color-orange-950-hsl: ${color.orange[950].hue}, ${color.orange[950].saturation}%, ${color.orange[950].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-950: hsl(var(--color-orange-950-hsl));`
            );
          }
          if (color.orange[900]) {
            nextRootStyles.push(
              `--color-orange-900-hsl: ${color.orange[900].hue}, ${color.orange[900].saturation}%, ${color.orange[900].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-900: hsl(var(--color-orange-900-hsl));`
            );
          }
          if (color.orange[850]) {
            nextRootStyles.push(
              `--color-orange-850-hsl: ${color.orange[850].hue}, ${color.orange[850].saturation}%, ${color.orange[850].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-850: hsl(var(--color-orange-850-hsl));`
            );
          }
          if (color.orange[800]) {
            nextRootStyles.push(
              `--color-orange-800-hsl: ${color.orange[800].hue}, ${color.orange[800].saturation}%, ${color.orange[800].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-800: hsl(var(--color-orange-800-hsl));`
            );
          }
          if (color.orange[750]) {
            nextRootStyles.push(
              `--color-orange-750-hsl: ${color.orange[750].hue}, ${color.orange[750].saturation}%, ${color.orange[750].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-750: hsl(var(--color-orange-750-hsl));`
            );
          }
          if (color.orange[700]) {
            nextRootStyles.push(
              `--color-orange-700-hsl: ${color.orange[700].hue}, ${color.orange[700].saturation}%, ${color.orange[700].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-700: hsl(var(--color-orange-700-hsl));`
            );
          }
          if (color.orange[650]) {
            nextRootStyles.push(
              `--color-orange-650-hsl: ${color.orange[650].hue}, ${color.orange[650].saturation}%, ${color.orange[650].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-650: hsl(var(--color-orange-650-hsl));`
            );
          }
          if (color.orange[600]) {
            nextRootStyles.push(
              `--color-orange-600-hsl: ${color.orange[600].hue}, ${color.orange[600].saturation}%, ${color.orange[600].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-600: hsl(var(--color-orange-600-hsl));`
            );
          }
          if (color.orange[550]) {
            nextRootStyles.push(
              `--color-orange-550-hsl: ${color.orange[550].hue}, ${color.orange[550].saturation}%, ${color.orange[550].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-550: hsl(var(--color-orange-550-hsl));`
            );
          }
          if (color.orange[500]) {
            nextRootStyles.push(
              `--color-orange-500-hsl: ${color.orange[500].hue}, ${color.orange[500].saturation}%, ${color.orange[500].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-500: hsl(var(--color-orange-500-hsl));`
            );
          }
          if (color.orange[450]) {
            nextRootStyles.push(
              `--color-orange-450-hsl: ${color.orange[450].hue}, ${color.orange[450].saturation}%, ${color.orange[450].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-450: hsl(var(--color-orange-450-hsl));`
            );
          }
          if (color.orange[400]) {
            nextRootStyles.push(
              `--color-orange-400-hsl: ${color.orange[400].hue}, ${color.orange[400].saturation}%, ${color.orange[400].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-400: hsl(var(--color-orange-400-hsl));`
            );
          }
          if (color.orange[350]) {
            nextRootStyles.push(
              `--color-orange-350-hsl: ${color.orange[350].hue}, ${color.orange[350].saturation}%, ${color.orange[350].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-350: hsl(var(--color-orange-350-hsl));`
            );
          }
          if (color.orange[300]) {
            nextRootStyles.push(
              `--color-orange-300-hsl: ${color.orange[300].hue}, ${color.orange[300].saturation}%, ${color.orange[300].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-300: hsl(var(--color-orange-300-hsl));`
            );
          }
          if (color.orange[250]) {
            nextRootStyles.push(
              `--color-orange-250-hsl: ${color.orange[250].hue}, ${color.orange[250].saturation}%, ${color.orange[250].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-250: hsl(var(--color-orange-250-hsl));`
            );
          }
          if (color.orange[200]) {
            nextRootStyles.push(
              `--color-orange-200-hsl: ${color.orange[200].hue}, ${color.orange[200].saturation}%, ${color.orange[200].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-200: hsl(var(--color-orange-200-hsl));`
            );
          }
          if (color.orange[150]) {
            nextRootStyles.push(
              `--color-orange-150-hsl: ${color.orange[150].hue}, ${color.orange[150].saturation}%, ${color.orange[150].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-150: hsl(var(--color-orange-150-hsl));`
            );
          }
          if (color.orange[100]) {
            nextRootStyles.push(
              `--color-orange-100-hsl: ${color.orange[100].hue}, ${color.orange[100].saturation}%, ${color.orange[100].lightness}%;`
            );
            nextRootStyles.push(
              `--color-orange-100: hsl(var(--color-orange-100-hsl));`
            );
          }
        }
        if (color.yellow) {
          if (color.yellow[950]) {
            nextRootStyles.push(
              `--color-yellow-950-hsl: ${color.yellow[950].hue}, ${color.yellow[950].saturation}%, ${color.yellow[950].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-950: hsl(var(--color-yellow-950-hsl));`
            );
          }
          if (color.yellow[900]) {
            nextRootStyles.push(
              `--color-yellow-900-hsl: ${color.yellow[900].hue}, ${color.yellow[900].saturation}%, ${color.yellow[900].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-900: hsl(var(--color-yellow-900-hsl));`
            );
          }
          if (color.yellow[850]) {
            nextRootStyles.push(
              `--color-yellow-850-hsl: ${color.yellow[850].hue}, ${color.yellow[850].saturation}%, ${color.yellow[850].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-850: hsl(var(--color-yellow-850-hsl));`
            );
          }
          if (color.yellow[800]) {
            nextRootStyles.push(
              `--color-yellow-800-hsl: ${color.yellow[800].hue}, ${color.yellow[800].saturation}%, ${color.yellow[800].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-800: hsl(var(--color-yellow-800-hsl));`
            );
          }
          if (color.yellow[750]) {
            nextRootStyles.push(
              `--color-yellow-750-hsl: ${color.yellow[750].hue}, ${color.yellow[750].saturation}%, ${color.yellow[750].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-750: hsl(var(--color-yellow-750-hsl));`
            );
          }
          if (color.yellow[700]) {
            nextRootStyles.push(
              `--color-yellow-700-hsl: ${color.yellow[700].hue}, ${color.yellow[700].saturation}%, ${color.yellow[700].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-700: hsl(var(--color-yellow-700-hsl));`
            );
          }
          if (color.yellow[650]) {
            nextRootStyles.push(
              `--color-yellow-650-hsl: ${color.yellow[650].hue}, ${color.yellow[650].saturation}%, ${color.yellow[650].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-650: hsl(var(--color-yellow-650-hsl));`
            );
          }
          if (color.yellow[600]) {
            nextRootStyles.push(
              `--color-yellow-600-hsl: ${color.yellow[600].hue}, ${color.yellow[600].saturation}%, ${color.yellow[600].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-600: hsl(var(--color-yellow-600-hsl));`
            );
          }
          if (color.yellow[550]) {
            nextRootStyles.push(
              `--color-yellow-550-hsl: ${color.yellow[550].hue}, ${color.yellow[550].saturation}%, ${color.yellow[550].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-550: hsl(var(--color-yellow-550-hsl));`
            );
          }
          if (color.yellow[500]) {
            nextRootStyles.push(
              `--color-yellow-500-hsl: ${color.yellow[500].hue}, ${color.yellow[500].saturation}%, ${color.yellow[500].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-500: hsl(var(--color-yellow-500-hsl));`
            );
          }
          if (color.yellow[450]) {
            nextRootStyles.push(
              `--color-yellow-450-hsl: ${color.yellow[450].hue}, ${color.yellow[450].saturation}%, ${color.yellow[450].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-450: hsl(var(--color-yellow-450-hsl));`
            );
          }
          if (color.yellow[400]) {
            nextRootStyles.push(
              `--color-yellow-400-hsl: ${color.yellow[400].hue}, ${color.yellow[400].saturation}%, ${color.yellow[400].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-400: hsl(var(--color-yellow-400-hsl));`
            );
          }
          if (color.yellow[350]) {
            nextRootStyles.push(
              `--color-yellow-350-hsl: ${color.yellow[350].hue}, ${color.yellow[350].saturation}%, ${color.yellow[350].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-350: hsl(var(--color-yellow-350-hsl));`
            );
          }
          if (color.yellow[300]) {
            nextRootStyles.push(
              `--color-yellow-300-hsl: ${color.yellow[300].hue}, ${color.yellow[300].saturation}%, ${color.yellow[300].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-300: hsl(var(--color-yellow-300-hsl));`
            );
          }
          if (color.yellow[250]) {
            nextRootStyles.push(
              `--color-yellow-250-hsl: ${color.yellow[250].hue}, ${color.yellow[250].saturation}%, ${color.yellow[250].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-250: hsl(var(--color-yellow-250-hsl));`
            );
          }
          if (color.yellow[200]) {
            nextRootStyles.push(
              `--color-yellow-200-hsl: ${color.yellow[200].hue}, ${color.yellow[200].saturation}%, ${color.yellow[200].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-200: hsl(var(--color-yellow-200-hsl));`
            );
          }
          if (color.yellow[150]) {
            nextRootStyles.push(
              `--color-yellow-150-hsl: ${color.yellow[150].hue}, ${color.yellow[150].saturation}%, ${color.yellow[150].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-150: hsl(var(--color-yellow-150-hsl));`
            );
          }
          if (color.yellow[100]) {
            nextRootStyles.push(
              `--color-yellow-100-hsl: ${color.yellow[100].hue}, ${color.yellow[100].saturation}%, ${color.yellow[100].lightness}%;`
            );
            nextRootStyles.push(
              `--color-yellow-100: hsl(var(--color-yellow-100-hsl));`
            );
          }
        }
        if (color.green) {
          if (color.green[950]) {
            nextRootStyles.push(
              `--color-green-950-hsl: ${color.green[950].hue}, ${color.green[950].saturation}%, ${color.green[950].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-950: hsl(var(--color-green-950-hsl));`
            );
          }
          if (color.green[900]) {
            nextRootStyles.push(
              `--color-green-900-hsl: ${color.green[900].hue}, ${color.green[900].saturation}%, ${color.green[900].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-900: hsl(var(--color-green-900-hsl));`
            );
          }
          if (color.green[850]) {
            nextRootStyles.push(
              `--color-green-850-hsl: ${color.green[850].hue}, ${color.green[850].saturation}%, ${color.green[850].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-850: hsl(var(--color-green-850-hsl));`
            );
          }
          if (color.green[800]) {
            nextRootStyles.push(
              `--color-green-800-hsl: ${color.green[800].hue}, ${color.green[800].saturation}%, ${color.green[800].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-800: hsl(var(--color-green-800-hsl));`
            );
          }
          if (color.green[750]) {
            nextRootStyles.push(
              `--color-green-750-hsl: ${color.green[750].hue}, ${color.green[750].saturation}%, ${color.green[750].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-750: hsl(var(--color-green-750-hsl));`
            );
          }
          if (color.green[700]) {
            nextRootStyles.push(
              `--color-green-700-hsl: ${color.green[700].hue}, ${color.green[700].saturation}%, ${color.green[700].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-700: hsl(var(--color-green-700-hsl));`
            );
          }
          if (color.green[650]) {
            nextRootStyles.push(
              `--color-green-650-hsl: ${color.green[650].hue}, ${color.green[650].saturation}%, ${color.green[650].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-650: hsl(var(--color-green-650-hsl));`
            );
          }
          if (color.green[600]) {
            nextRootStyles.push(
              `--color-green-600-hsl: ${color.green[600].hue}, ${color.green[600].saturation}%, ${color.green[600].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-600: hsl(var(--color-green-600-hsl));`
            );
          }
          if (color.green[550]) {
            nextRootStyles.push(
              `--color-green-550-hsl: ${color.green[550].hue}, ${color.green[550].saturation}%, ${color.green[550].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-550: hsl(var(--color-green-550-hsl));`
            );
          }
          if (color.green[500]) {
            nextRootStyles.push(
              `--color-green-500-hsl: ${color.green[500].hue}, ${color.green[500].saturation}%, ${color.green[500].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-500: hsl(var(--color-green-500-hsl));`
            );
          }
          if (color.green[450]) {
            nextRootStyles.push(
              `--color-green-450-hsl: ${color.green[450].hue}, ${color.green[450].saturation}%, ${color.green[450].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-450: hsl(var(--color-green-450-hsl));`
            );
          }
          if (color.green[400]) {
            nextRootStyles.push(
              `--color-green-400-hsl: ${color.green[400].hue}, ${color.green[400].saturation}%, ${color.green[400].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-400: hsl(var(--color-green-400-hsl));`
            );
          }
          if (color.green[350]) {
            nextRootStyles.push(
              `--color-green-350-hsl: ${color.green[350].hue}, ${color.green[350].saturation}%, ${color.green[350].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-350: hsl(var(--color-green-350-hsl));`
            );
          }
          if (color.green[300]) {
            nextRootStyles.push(
              `--color-green-300-hsl: ${color.green[300].hue}, ${color.green[300].saturation}%, ${color.green[300].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-300: hsl(var(--color-green-300-hsl));`
            );
          }
          if (color.green[250]) {
            nextRootStyles.push(
              `--color-green-250-hsl: ${color.green[250].hue}, ${color.green[250].saturation}%, ${color.green[250].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-250: hsl(var(--color-green-250-hsl));`
            );
          }
          if (color.green[200]) {
            nextRootStyles.push(
              `--color-green-200-hsl: ${color.green[200].hue}, ${color.green[200].saturation}%, ${color.green[200].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-200: hsl(var(--color-green-200-hsl));`
            );
          }
          if (color.green[150]) {
            nextRootStyles.push(
              `--color-green-150-hsl: ${color.green[150].hue}, ${color.green[150].saturation}%, ${color.green[150].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-150: hsl(var(--color-green-150-hsl));`
            );
          }
          if (color.green[100]) {
            nextRootStyles.push(
              `--color-green-100-hsl: ${color.green[100].hue}, ${color.green[100].saturation}%, ${color.green[100].lightness}%;`
            );
            nextRootStyles.push(
              `--color-green-100: hsl(var(--color-green-100-hsl));`
            );
          }
        }
        if (color.cyan) {
          if (color.cyan[950]) {
            nextRootStyles.push(
              `--color-cyan-950-hsl: ${color.cyan[950].hue}, ${color.cyan[950].saturation}%, ${color.cyan[950].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-950: hsl(var(--color-cyan-950-hsl));`);
          }
          if (color.cyan[900]) {
            nextRootStyles.push(
              `--color-cyan-900-hsl: ${color.cyan[900].hue}, ${color.cyan[900].saturation}%, ${color.cyan[900].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-900: hsl(var(--color-cyan-900-hsl));`);
          }
          if (color.cyan[850]) {
            nextRootStyles.push(
              `--color-cyan-850-hsl: ${color.cyan[850].hue}, ${color.cyan[850].saturation}%, ${color.cyan[850].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-850: hsl(var(--color-cyan-850-hsl));`);
          }
          if (color.cyan[800]) {
            nextRootStyles.push(
              `--color-cyan-800-hsl: ${color.cyan[800].hue}, ${color.cyan[800].saturation}%, ${color.cyan[800].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-800: hsl(var(--color-cyan-800-hsl));`);
          }
          if (color.cyan[750]) {
            nextRootStyles.push(
              `--color-cyan-750-hsl: ${color.cyan[750].hue}, ${color.cyan[750].saturation}%, ${color.cyan[750].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-750: hsl(var(--color-cyan-750-hsl));`);
          }
          if (color.cyan[700]) {
            nextRootStyles.push(
              `--color-cyan-700-hsl: ${color.cyan[700].hue}, ${color.cyan[700].saturation}%, ${color.cyan[700].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-700: hsl(var(--color-cyan-700-hsl));`);
          }
          if (color.cyan[650]) {
            nextRootStyles.push(
              `--color-cyan-650-hsl: ${color.cyan[650].hue}, ${color.cyan[650].saturation}%, ${color.cyan[650].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-650: hsl(var(--color-cyan-650-hsl));`);
          }
          if (color.cyan[600]) {
            nextRootStyles.push(
              `--color-cyan-600-hsl: ${color.cyan[600].hue}, ${color.cyan[600].saturation}%, ${color.cyan[600].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-600: hsl(var(--color-cyan-600-hsl));`);
          }
          if (color.cyan[550]) {
            nextRootStyles.push(
              `--color-cyan-550-hsl: ${color.cyan[550].hue}, ${color.cyan[550].saturation}%, ${color.cyan[550].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-550: hsl(var(--color-cyan-550-hsl));`);
          }
          if (color.cyan[500]) {
            nextRootStyles.push(
              `--color-cyan-500-hsl: ${color.cyan[500].hue}, ${color.cyan[500].saturation}%, ${color.cyan[500].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-500: hsl(var(--color-cyan-500-hsl));`);
          }
          if (color.cyan[450]) {
            nextRootStyles.push(
              `--color-cyan-450-hsl: ${color.cyan[450].hue}, ${color.cyan[450].saturation}%, ${color.cyan[450].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-450: hsl(var(--color-cyan-450-hsl));`);
          }
          if (color.cyan[400]) {
            nextRootStyles.push(
              `--color-cyan-400-hsl: ${color.cyan[400].hue}, ${color.cyan[400].saturation}%, ${color.cyan[400].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-400: hsl(var(--color-cyan-400-hsl));`);
          }
          if (color.cyan[350]) {
            nextRootStyles.push(
              `--color-cyan-350-hsl: ${color.cyan[350].hue}, ${color.cyan[350].saturation}%, ${color.cyan[350].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-350: hsl(var(--color-cyan-350-hsl));`);
          }
          if (color.cyan[300]) {
            nextRootStyles.push(
              `--color-cyan-300-hsl: ${color.cyan[300].hue}, ${color.cyan[300].saturation}%, ${color.cyan[300].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-300: hsl(var(--color-cyan-300-hsl));`);
          }
          if (color.cyan[250]) {
            nextRootStyles.push(
              `--color-cyan-250-hsl: ${color.cyan[250].hue}, ${color.cyan[250].saturation}%, ${color.cyan[250].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-250: hsl(var(--color-cyan-250-hsl));`);
          }
          if (color.cyan[200]) {
            nextRootStyles.push(
              `--color-cyan-200-hsl: ${color.cyan[200].hue}, ${color.cyan[200].saturation}%, ${color.cyan[200].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-200: hsl(var(--color-cyan-200-hsl));`);
          }
          if (color.cyan[150]) {
            nextRootStyles.push(
              `--color-cyan-150-hsl: ${color.cyan[150].hue}, ${color.cyan[150].saturation}%, ${color.cyan[150].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-150: hsl(var(--color-cyan-150-hsl));`);
          }
          if (color.cyan[100]) {
            nextRootStyles.push(
              `--color-cyan-100-hsl: ${color.cyan[100].hue}, ${color.cyan[100].saturation}%, ${color.cyan[100].lightness}%;`
            );
            nextRootStyles.push(`--color-cyan-100: hsl(var(--color-cyan-100-hsl));`);
          }
        }
        if (color.blue) {
          if (color.blue[950]) {
            nextRootStyles.push(
              `--color-blue-950-hsl: ${color.blue[950].hue}, ${color.blue[950].saturation}%, ${color.blue[950].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-950: hsl(var(--color-blue-950-hsl));`);
          }
          if (color.blue[900]) {
            nextRootStyles.push(
              `--color-blue-900-hsl: ${color.blue[900].hue}, ${color.blue[900].saturation}%, ${color.blue[900].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-900: hsl(var(--color-blue-900-hsl));`);
          }
          if (color.blue[850]) {
            nextRootStyles.push(
              `--color-blue-850-hsl: ${color.blue[850].hue}, ${color.blue[850].saturation}%, ${color.blue[850].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-850: hsl(var(--color-blue-850-hsl));`);
          }
          if (color.blue[800]) {
            nextRootStyles.push(
              `--color-blue-800-hsl: ${color.blue[800].hue}, ${color.blue[800].saturation}%, ${color.blue[800].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-800: hsl(var(--color-blue-800-hsl));`);
          }
          if (color.blue[750]) {
            nextRootStyles.push(
              `--color-blue-750-hsl: ${color.blue[750].hue}, ${color.blue[750].saturation}%, ${color.blue[750].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-750: hsl(var(--color-blue-750-hsl));`);
          }
          if (color.blue[700]) {
            nextRootStyles.push(
              `--color-blue-700-hsl: ${color.blue[700].hue}, ${color.blue[700].saturation}%, ${color.blue[700].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-700: hsl(var(--color-blue-700-hsl));`);
          }
          if (color.blue[650]) {
            nextRootStyles.push(
              `--color-blue-650-hsl: ${color.blue[650].hue}, ${color.blue[650].saturation}%, ${color.blue[650].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-650: hsl(var(--color-blue-650-hsl));`);
          }
          if (color.blue[600]) {
            nextRootStyles.push(
              `--color-blue-600-hsl: ${color.blue[600].hue}, ${color.blue[600].saturation}%, ${color.blue[600].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-600: hsl(var(--color-blue-600-hsl));`);
          }
          if (color.blue[550]) {
            nextRootStyles.push(
              `--color-blue-550-hsl: ${color.blue[550].hue}, ${color.blue[550].saturation}%, ${color.blue[550].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-550: hsl(var(--color-blue-550-hsl));`);
          }
          if (color.blue[500]) {
            nextRootStyles.push(
              `--color-blue-500-hsl: ${color.blue[500].hue}, ${color.blue[500].saturation}%, ${color.blue[500].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-500: hsl(var(--color-blue-500-hsl));`);
          }
          if (color.blue[450]) {
            nextRootStyles.push(
              `--color-blue-450-hsl: ${color.blue[450].hue}, ${color.blue[450].saturation}%, ${color.blue[450].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-450: hsl(var(--color-blue-450-hsl));`);
          }
          if (color.blue[400]) {
            nextRootStyles.push(
              `--color-blue-400-hsl: ${color.blue[400].hue}, ${color.blue[400].saturation}%, ${color.blue[400].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-400: hsl(var(--color-blue-400-hsl));`);
          }
          if (color.blue[350]) {
            nextRootStyles.push(
              `--color-blue-350-hsl: ${color.blue[350].hue}, ${color.blue[350].saturation}%, ${color.blue[350].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-350: hsl(var(--color-blue-350-hsl));`);
          }
          if (color.blue[300]) {
            nextRootStyles.push(
              `--color-blue-300-hsl: ${color.blue[300].hue}, ${color.blue[300].saturation}%, ${color.blue[300].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-300: hsl(var(--color-blue-300-hsl));`);
          }
          if (color.blue[250]) {
            nextRootStyles.push(
              `--color-blue-250-hsl: ${color.blue[250].hue}, ${color.blue[250].saturation}%, ${color.blue[250].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-250: hsl(var(--color-blue-250-hsl));`);
          }
          if (color.blue[200]) {
            nextRootStyles.push(
              `--color-blue-200-hsl: ${color.blue[200].hue}, ${color.blue[200].saturation}%, ${color.blue[200].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-200: hsl(var(--color-blue-200-hsl));`);
          }
          if (color.blue[150]) {
            nextRootStyles.push(
              `--color-blue-150-hsl: ${color.blue[150].hue}, ${color.blue[150].saturation}%, ${color.blue[150].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-150: hsl(var(--color-blue-150-hsl));`);
          }
          if (color.blue[100]) {
            nextRootStyles.push(
              `--color-blue-100-hsl: ${color.blue[100].hue}, ${color.blue[100].saturation}%, ${color.blue[100].lightness}%;`
            );
            nextRootStyles.push(`--color-blue-100: hsl(var(--color-blue-100-hsl));`);
          }
        }
        if (color.violet) {
          if (color.violet[950]) {
            nextRootStyles.push(
              `--color-violet-950-hsl: ${color.violet[950].hue}, ${color.violet[950].saturation}%, ${color.violet[950].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-950: hsl(var(--color-violet-950-hsl));`
            );
          }
          if (color.violet[900]) {
            nextRootStyles.push(
              `--color-violet-900-hsl: ${color.violet[900].hue}, ${color.violet[900].saturation}%, ${color.violet[900].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-900: hsl(var(--color-violet-900-hsl));`
            );
          }
          if (color.violet[850]) {
            nextRootStyles.push(
              `--color-violet-850-hsl: ${color.violet[850].hue}, ${color.violet[850].saturation}%, ${color.violet[850].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-850: hsl(var(--color-violet-850-hsl));`
            );
          }
          if (color.violet[800]) {
            nextRootStyles.push(
              `--color-violet-800-hsl: ${color.violet[800].hue}, ${color.violet[800].saturation}%, ${color.violet[800].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-800: hsl(var(--color-violet-800-hsl));`
            );
          }
          if (color.violet[750]) {
            nextRootStyles.push(
              `--color-violet-750-hsl: ${color.violet[750].hue}, ${color.violet[750].saturation}%, ${color.violet[750].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-750: hsl(var(--color-violet-750-hsl));`
            );
          }
          if (color.violet[700]) {
            nextRootStyles.push(
              `--color-violet-700-hsl: ${color.violet[700].hue}, ${color.violet[700].saturation}%, ${color.violet[700].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-700: hsl(var(--color-violet-700-hsl));`
            );
          }
          if (color.violet[650]) {
            nextRootStyles.push(
              `--color-violet-650-hsl: ${color.violet[650].hue}, ${color.violet[650].saturation}%, ${color.violet[650].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-650: hsl(var(--color-violet-650-hsl));`
            );
          }
          if (color.violet[600]) {
            nextRootStyles.push(
              `--color-violet-600-hsl: ${color.violet[600].hue}, ${color.violet[600].saturation}%, ${color.violet[600].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-600: hsl(var(--color-violet-600-hsl));`
            );
          }
          if (color.violet[550]) {
            nextRootStyles.push(
              `--color-violet-550-hsl: ${color.violet[550].hue}, ${color.violet[550].saturation}%, ${color.violet[550].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-550: hsl(var(--color-violet-550-hsl));`
            );
          }
          if (color.violet[500]) {
            nextRootStyles.push(
              `--color-violet-500-hsl: ${color.violet[500].hue}, ${color.violet[500].saturation}%, ${color.violet[500].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-500: hsl(var(--color-violet-500-hsl));`
            );
          }
          if (color.violet[450]) {
            nextRootStyles.push(
              `--color-violet-450-hsl: ${color.violet[450].hue}, ${color.violet[450].saturation}%, ${color.violet[450].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-450: hsl(var(--color-violet-450-hsl));`
            );
          }
          if (color.violet[400]) {
            nextRootStyles.push(
              `--color-violet-400-hsl: ${color.violet[400].hue}, ${color.violet[400].saturation}%, ${color.violet[400].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-400: hsl(var(--color-violet-400-hsl));`
            );
          }
          if (color.violet[350]) {
            nextRootStyles.push(
              `--color-violet-350-hsl: ${color.violet[350].hue}, ${color.violet[350].saturation}%, ${color.violet[350].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-350: hsl(var(--color-violet-350-hsl));`
            );
          }
          if (color.violet[300]) {
            nextRootStyles.push(
              `--color-violet-300-hsl: ${color.violet[300].hue}, ${color.violet[300].saturation}%, ${color.violet[300].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-300: hsl(var(--color-violet-300-hsl));`
            );
          }
          if (color.violet[250]) {
            nextRootStyles.push(
              `--color-violet-250-hsl: ${color.violet[250].hue}, ${color.violet[250].saturation}%, ${color.violet[250].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-250: hsl(var(--color-violet-250-hsl));`
            );
          }
          if (color.violet[200]) {
            nextRootStyles.push(
              `--color-violet-200-hsl: ${color.violet[200].hue}, ${color.violet[200].saturation}%, ${color.violet[200].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-200: hsl(var(--color-violet-200-hsl));`
            );
          }
          if (color.violet[150]) {
            nextRootStyles.push(
              `--color-violet-150-hsl: ${color.violet[150].hue}, ${color.violet[150].saturation}%, ${color.violet[150].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-150: hsl(var(--color-violet-150-hsl));`
            );
          }
          if (color.violet[100]) {
            nextRootStyles.push(
              `--color-violet-100-hsl: ${color.violet[100].hue}, ${color.violet[100].saturation}%, ${color.violet[100].lightness}%;`
            );
            nextRootStyles.push(
              `--color-violet-100: hsl(var(--color-violet-100-hsl));`
            );
          }
        }
      }

      if (props.cssVariableSetting.typography) {
        const typography = props.cssVariableSetting.typography;
        if (typography.fontSize) {
          if (typography.fontSize.small) {
            nextRootStyles.push(`--font-size-small: ${typography.fontSize.small};`);
          }
          if (typography.fontSize.normal) {
            nextRootStyles.push(
              `--font-size-normal: ${typography.fontSize.normal};`
            );
          }
          if (typography.fontSize.medium) {
            nextRootStyles.push(
              `--font-size-medium: ${typography.fontSize.medium};`
            );
          }
          if (typography.fontSize.large) {
            nextRootStyles.push(`--font-size-large: ${typography.fontSize.large};`);
          }
        }
        if (typography.fontWeight) {
          if (typography.fontWeight.light) {
            nextRootStyles.push(
              `--font-weight-light: ${typography.fontWeight.light};`
            );
          }
          if (typography.fontWeight.normal) {
            nextRootStyles.push(
              `--font-weight-normal: ${typography.fontWeight.normal};`
            );
          }
          if (typography.fontWeight.medium) {
            nextRootStyles.push(
              `--font-weight-medium: ${typography.fontWeight.medium};`
            );
          }
          if (typography.fontWeight.semibold) {
            nextRootStyles.push(
              `--font-weight-semibold: ${typography.fontWeight.semibold};`
            );
          }
          if (typography.fontWeight.bold) {
            nextRootStyles.push(
              `--font-weight-bold: ${typography.fontWeight.bold};`
            );
          }
        }
      }
    }
    setRootStyles(nextRootStyles);
  }, [props.cssVariableSetting]);

  useEffect(() => {
    const nextLightSchemeStyles: string[] = [];
    if (props.cssVariableSetting) {
      if (props.cssVariableSetting.color) {
        const color = props.cssVariableSetting.color;
        if (color.light) {
          if (color.light.default) {
            if (color.light.default.default) {
              if (color.light.default.default.fore) {
                nextLightSchemeStyles.push(
                  `--color-default-fore: ${
                    color.light.default.default.fore.startsWith("--")
                      ? `var(${color.light.default.default.fore});`
                      : `${color.light.default.default.fore};`
                  }`
                );
              }
              if (color.light.default.default.back) {
                nextLightSchemeStyles.push(
                  `--color-default-back: ${
                    color.light.default.default.back.startsWith("--")
                      ? `var(${color.light.default.default.back});`
                      : `${color.light.default.default.back};`
                  }`
                );
              }
              if (color.light.default.default.border) {
                nextLightSchemeStyles.push(
                  `--color-default-border: ${
                    color.light.default.default.border.startsWith("--")
                      ? `var(${color.light.default.default.border});`
                      : `${color.light.default.default.border};`
                  }`
                );
              }
              if (color.light.default.default.shadow) {
                nextLightSchemeStyles.push(
                  `--color-default-back: ${
                    color.light.default.default.shadow.startsWith("--")
                      ? `var(${color.light.default.default.shadow});`
                      : `${color.light.default.default.shadow};`
                  }`
                );
              }
            }
            if (color.light.default.disabled) {
              if (color.light.default.disabled.fore) {
                nextLightSchemeStyles.push(
                  `--color-default-disabled-fore: ${
                    color.light.default.disabled.fore.startsWith("--")
                      ? `var(${color.light.default.disabled.fore});`
                      : `${color.light.default.disabled.fore};`
                  }`
                );
              }
              if (color.light.default.disabled.back) {
                nextLightSchemeStyles.push(
                  `--color-default-disabled-back: ${
                    color.light.default.disabled.back.startsWith("--")
                      ? `var(${color.light.default.disabled.back});`
                      : `${color.light.default.disabled.back};`
                  }`
                );
              }
              if (color.light.default.disabled.border) {
                nextLightSchemeStyles.push(
                  `--color-default-disabled-border: ${
                    color.light.default.disabled.border.startsWith("--")
                      ? `var(${color.light.default.disabled.border});`
                      : `${color.light.default.disabled.border};`
                  }`
                );
              }
              if (color.light.default.disabled.shadow) {
                nextLightSchemeStyles.push(
                  `--color-default-disabled-back: ${
                    color.light.default.disabled.shadow.startsWith("--")
                      ? `var(${color.light.default.disabled.shadow});`
                      : `${color.light.default.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.light.default.hover) {
              if (color.light.default.hover.fore) {
                nextLightSchemeStyles.push(
                  `--color-default-hover-fore: ${
                    color.light.default.hover.fore.startsWith("--")
                      ? `var(${color.light.default.hover.fore});`
                      : `${color.light.default.hover.fore};`
                  }`
                );
              }
              if (color.light.default.hover.back) {
                nextLightSchemeStyles.push(
                  `--color-default-hover-back: ${
                    color.light.default.hover.back.startsWith("--")
                      ? `var(${color.light.default.hover.back});`
                      : `${color.light.default.hover.back};`
                  }`
                );
              }
              if (color.light.default.hover.border) {
                nextLightSchemeStyles.push(
                  `--color-default-hover-border: ${
                    color.light.default.hover.border.startsWith("--")
                      ? `var(${color.light.default.hover.border});`
                      : `${color.light.default.hover.border};`
                  }`
                );
              }
              if (color.light.default.hover.shadow) {
                nextLightSchemeStyles.push(
                  `--color-default-hover-back: ${
                    color.light.default.hover.shadow.startsWith("--")
                      ? `var(${color.light.default.hover.shadow});`
                      : `${color.light.default.hover.shadow};`
                  }`
                );
              }
            }
            if (color.light.default.focus) {
              if (color.light.default.focus.fore) {
                nextLightSchemeStyles.push(
                  `--color-default-focus-fore: ${
                    color.light.default.focus.fore.startsWith("--")
                      ? `var(${color.light.default.focus.fore});`
                      : `${color.light.default.focus.fore};`
                  }`
                );
              }
              if (color.light.default.focus.back) {
                nextLightSchemeStyles.push(
                  `--color-default-focus-back: ${
                    color.light.default.focus.back.startsWith("--")
                      ? `var(${color.light.default.focus.back});`
                      : `${color.light.default.focus.back};`
                  }`
                );
              }
              if (color.light.default.focus.border) {
                nextLightSchemeStyles.push(
                  `--color-default-focus-border: ${
                    color.light.default.focus.border.startsWith("--")
                      ? `var(${color.light.default.focus.border});`
                      : `${color.light.default.focus.border};`
                  }`
                );
              }
              if (color.light.default.focus.shadow) {
                nextLightSchemeStyles.push(
                  `--color-default-focus-back: ${
                    color.light.default.focus.shadow.startsWith("--")
                      ? `var(${color.light.default.focus.shadow});`
                      : `${color.light.default.focus.shadow};`
                  }`
                );
              }
            }
            if (color.light.default.active) {
              if (color.light.default.active.fore) {
                nextLightSchemeStyles.push(
                  `--color-default-active-fore: ${
                    color.light.default.active.fore.startsWith("--")
                      ? `var(${color.light.default.active.fore});`
                      : `${color.light.default.active.fore};`
                  }`
                );
              }
              if (color.light.default.active.back) {
                nextLightSchemeStyles.push(
                  `--color-default-active-back: ${
                    color.light.default.active.back.startsWith("--")
                      ? `var(${color.light.default.active.back});`
                      : `${color.light.default.active.back};`
                  }`
                );
              }
              if (color.light.default.active.border) {
                nextLightSchemeStyles.push(
                  `--color-default-active-border: ${
                    color.light.default.active.border.startsWith("--")
                      ? `var(${color.light.default.active.border});`
                      : `${color.light.default.active.border};`
                  }`
                );
              }
              if (color.light.default.active.shadow) {
                nextLightSchemeStyles.push(
                  `--color-default-active-back: ${
                    color.light.default.active.shadow.startsWith("--")
                      ? `var(${color.light.default.active.shadow});`
                      : `${color.light.default.active.shadow};`
                  }`
                );
              }
            }
          }
          if (color.light.gray) {
            if (color.light.gray.default) {
              if (color.light.gray.default.fore) {
                nextLightSchemeStyles.push(
                  `--color-gray-fore: ${
                    color.light.gray.default.fore.startsWith("--")
                      ? `var(${color.light.gray.default.fore});`
                      : `${color.light.gray.default.fore};`
                  }`
                );
              }
              if (color.light.gray.default.back) {
                nextLightSchemeStyles.push(
                  `--color-gray-back: ${
                    color.light.gray.default.back.startsWith("--")
                      ? `var(${color.light.gray.default.back});`
                      : `${color.light.gray.default.back};`
                  }`
                );
              }
              if (color.light.gray.default.border) {
                nextLightSchemeStyles.push(
                  `--color-gray-border: ${
                    color.light.gray.default.border.startsWith("--")
                      ? `var(${color.light.gray.default.border});`
                      : `${color.light.gray.default.border};`
                  }`
                );
              }
              if (color.light.gray.default.shadow) {
                nextLightSchemeStyles.push(
                  `--color-gray-back: ${
                    color.light.gray.default.shadow.startsWith("--")
                      ? `var(${color.light.gray.default.shadow});`
                      : `${color.light.gray.default.shadow};`
                  }`
                );
              }
            }
            if (color.light.gray.disabled) {
              if (color.light.gray.disabled.fore) {
                nextLightSchemeStyles.push(
                  `--color-gray-disabled-fore: ${
                    color.light.gray.disabled.fore.startsWith("--")
                      ? `var(${color.light.gray.disabled.fore});`
                      : `${color.light.gray.disabled.fore};`
                  }`
                );
              }
              if (color.light.gray.disabled.back) {
                nextLightSchemeStyles.push(
                  `--color-gray-disabled-back: ${
                    color.light.gray.disabled.back.startsWith("--")
                      ? `var(${color.light.gray.disabled.back});`
                      : `${color.light.gray.disabled.back};`
                  }`
                );
              }
              if (color.light.gray.disabled.border) {
                nextLightSchemeStyles.push(
                  `--color-gray-disabled-border: ${
                    color.light.gray.disabled.border.startsWith("--")
                      ? `var(${color.light.gray.disabled.border});`
                      : `${color.light.gray.disabled.border};`
                  }`
                );
              }
              if (color.light.gray.disabled.shadow) {
                nextLightSchemeStyles.push(
                  `--color-gray-disabled-back: ${
                    color.light.gray.disabled.shadow.startsWith("--")
                      ? `var(${color.light.gray.disabled.shadow});`
                      : `${color.light.gray.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.light.gray.hover) {
              if (color.light.gray.hover.fore) {
                nextLightSchemeStyles.push(
                  `--color-gray-hover-fore: ${
                    color.light.gray.hover.fore.startsWith("--")
                      ? `var(${color.light.gray.hover.fore});`
                      : `${color.light.gray.hover.fore};`
                  }`
                );
              }
              if (color.light.gray.hover.back) {
                nextLightSchemeStyles.push(
                  `--color-gray-hover-back: ${
                    color.light.gray.hover.back.startsWith("--")
                      ? `var(${color.light.gray.hover.back});`
                      : `${color.light.gray.hover.back};`
                  }`
                );
              }
              if (color.light.gray.hover.border) {
                nextLightSchemeStyles.push(
                  `--color-gray-hover-border: ${
                    color.light.gray.hover.border.startsWith("--")
                      ? `var(${color.light.gray.hover.border});`
                      : `${color.light.gray.hover.border};`
                  }`
                );
              }
              if (color.light.gray.hover.shadow) {
                nextLightSchemeStyles.push(
                  `--color-gray-hover-back: ${
                    color.light.gray.hover.shadow.startsWith("--")
                      ? `var(${color.light.gray.hover.shadow});`
                      : `${color.light.gray.hover.shadow};`
                  }`
                );
              }
            }
            if (color.light.gray.focus) {
              if (color.light.gray.focus.fore) {
                nextLightSchemeStyles.push(
                  `--color-gray-focus-fore: ${
                    color.light.gray.focus.fore.startsWith("--")
                      ? `var(${color.light.gray.focus.fore});`
                      : `${color.light.gray.focus.fore};`
                  }`
                );
              }
              if (color.light.gray.focus.back) {
                nextLightSchemeStyles.push(
                  `--color-gray-focus-back: ${
                    color.light.gray.focus.back.startsWith("--")
                      ? `var(${color.light.gray.focus.back});`
                      : `${color.light.gray.focus.back};`
                  }`
                );
              }
              if (color.light.gray.focus.border) {
                nextLightSchemeStyles.push(
                  `--color-gray-focus-border: ${
                    color.light.gray.focus.border.startsWith("--")
                      ? `var(${color.light.gray.focus.border});`
                      : `${color.light.gray.focus.border};`
                  }`
                );
              }
              if (color.light.gray.focus.shadow) {
                nextLightSchemeStyles.push(
                  `--color-gray-focus-back: ${
                    color.light.gray.focus.shadow.startsWith("--")
                      ? `var(${color.light.gray.focus.shadow});`
                      : `${color.light.gray.focus.shadow};`
                  }`
                );
              }
            }
            if (color.light.gray.active) {
              if (color.light.gray.active.fore) {
                nextLightSchemeStyles.push(
                  `--color-gray-active-fore: ${
                    color.light.gray.active.fore.startsWith("--")
                      ? `var(${color.light.gray.active.fore});`
                      : `${color.light.gray.active.fore};`
                  }`
                );
              }
              if (color.light.gray.active.back) {
                nextLightSchemeStyles.push(
                  `--color-gray-active-back: ${
                    color.light.gray.active.back.startsWith("--")
                      ? `var(${color.light.gray.active.back});`
                      : `${color.light.gray.active.back};`
                  }`
                );
              }
              if (color.light.gray.active.border) {
                nextLightSchemeStyles.push(
                  `--color-gray-active-border: ${
                    color.light.gray.active.border.startsWith("--")
                      ? `var(${color.light.gray.active.border});`
                      : `${color.light.gray.active.border};`
                  }`
                );
              }
              if (color.light.gray.active.shadow) {
                nextLightSchemeStyles.push(
                  `--color-gray-active-back: ${
                    color.light.gray.active.shadow.startsWith("--")
                      ? `var(${color.light.gray.active.shadow});`
                      : `${color.light.gray.active.shadow};`
                  }`
                );
              }
            }
          }
          if (color.light.red) {
            if (color.light.red.default) {
              if (color.light.red.default.fore) {
                nextLightSchemeStyles.push(
                  `--color-red-fore: ${
                    color.light.red.default.fore.startsWith("--")
                      ? `var(${color.light.red.default.fore});`
                      : `${color.light.red.default.fore};`
                  }`
                );
              }
              if (color.light.red.default.back) {
                nextLightSchemeStyles.push(
                  `--color-red-back: ${
                    color.light.red.default.back.startsWith("--")
                      ? `var(${color.light.red.default.back});`
                      : `${color.light.red.default.back};`
                  }`
                );
              }
              if (color.light.red.default.border) {
                nextLightSchemeStyles.push(
                  `--color-red-border: ${
                    color.light.red.default.border.startsWith("--")
                      ? `var(${color.light.red.default.border});`
                      : `${color.light.red.default.border};`
                  }`
                );
              }
              if (color.light.red.default.shadow) {
                nextLightSchemeStyles.push(
                  `--color-red-back: ${
                    color.light.red.default.shadow.startsWith("--")
                      ? `var(${color.light.red.default.shadow});`
                      : `${color.light.red.default.shadow};`
                  }`
                );
              }
            }
            if (color.light.red.disabled) {
              if (color.light.red.disabled.fore) {
                nextLightSchemeStyles.push(
                  `--color-red-disabled-fore: ${
                    color.light.red.disabled.fore.startsWith("--")
                      ? `var(${color.light.red.disabled.fore});`
                      : `${color.light.red.disabled.fore};`
                  }`
                );
              }
              if (color.light.red.disabled.back) {
                nextLightSchemeStyles.push(
                  `--color-red-disabled-back: ${
                    color.light.red.disabled.back.startsWith("--")
                      ? `var(${color.light.red.disabled.back});`
                      : `${color.light.red.disabled.back};`
                  }`
                );
              }
              if (color.light.red.disabled.border) {
                nextLightSchemeStyles.push(
                  `--color-red-disabled-border: ${
                    color.light.red.disabled.border.startsWith("--")
                      ? `var(${color.light.red.disabled.border});`
                      : `${color.light.red.disabled.border};`
                  }`
                );
              }
              if (color.light.red.disabled.shadow) {
                nextLightSchemeStyles.push(
                  `--color-red-disabled-back: ${
                    color.light.red.disabled.shadow.startsWith("--")
                      ? `var(${color.light.red.disabled.shadow});`
                      : `${color.light.red.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.light.red.hover) {
              if (color.light.red.hover.fore) {
                nextLightSchemeStyles.push(
                  `--color-red-hover-fore: ${
                    color.light.red.hover.fore.startsWith("--")
                      ? `var(${color.light.red.hover.fore});`
                      : `${color.light.red.hover.fore};`
                  }`
                );
              }
              if (color.light.red.hover.back) {
                nextLightSchemeStyles.push(
                  `--color-red-hover-back: ${
                    color.light.red.hover.back.startsWith("--")
                      ? `var(${color.light.red.hover.back});`
                      : `${color.light.red.hover.back};`
                  }`
                );
              }
              if (color.light.red.hover.border) {
                nextLightSchemeStyles.push(
                  `--color-red-hover-border: ${
                    color.light.red.hover.border.startsWith("--")
                      ? `var(${color.light.red.hover.border});`
                      : `${color.light.red.hover.border};`
                  }`
                );
              }
              if (color.light.red.hover.shadow) {
                nextLightSchemeStyles.push(
                  `--color-red-hover-back: ${
                    color.light.red.hover.shadow.startsWith("--")
                      ? `var(${color.light.red.hover.shadow});`
                      : `${color.light.red.hover.shadow};`
                  }`
                );
              }
            }
            if (color.light.red.focus) {
              if (color.light.red.focus.fore) {
                nextLightSchemeStyles.push(
                  `--color-red-focus-fore: ${
                    color.light.red.focus.fore.startsWith("--")
                      ? `var(${color.light.red.focus.fore});`
                      : `${color.light.red.focus.fore};`
                  }`
                );
              }
              if (color.light.red.focus.back) {
                nextLightSchemeStyles.push(
                  `--color-red-focus-back: ${
                    color.light.red.focus.back.startsWith("--")
                      ? `var(${color.light.red.focus.back});`
                      : `${color.light.red.focus.back};`
                  }`
                );
              }
              if (color.light.red.focus.border) {
                nextLightSchemeStyles.push(
                  `--color-red-focus-border: ${
                    color.light.red.focus.border.startsWith("--")
                      ? `var(${color.light.red.focus.border});`
                      : `${color.light.red.focus.border};`
                  }`
                );
              }
              if (color.light.red.focus.shadow) {
                nextLightSchemeStyles.push(
                  `--color-red-focus-back: ${
                    color.light.red.focus.shadow.startsWith("--")
                      ? `var(${color.light.red.focus.shadow});`
                      : `${color.light.red.focus.shadow};`
                  }`
                );
              }
            }
            if (color.light.red.active) {
              if (color.light.red.active.fore) {
                nextLightSchemeStyles.push(
                  `--color-red-active-fore: ${
                    color.light.red.active.fore.startsWith("--")
                      ? `var(${color.light.red.active.fore});`
                      : `${color.light.red.active.fore};`
                  }`
                );
              }
              if (color.light.red.active.back) {
                nextLightSchemeStyles.push(
                  `--color-red-active-back: ${
                    color.light.red.active.back.startsWith("--")
                      ? `var(${color.light.red.active.back});`
                      : `${color.light.red.active.back};`
                  }`
                );
              }
              if (color.light.red.active.border) {
                nextLightSchemeStyles.push(
                  `--color-red-active-border: ${
                    color.light.red.active.border.startsWith("--")
                      ? `var(${color.light.red.active.border});`
                      : `${color.light.red.active.border};`
                  }`
                );
              }
              if (color.light.red.active.shadow) {
                nextLightSchemeStyles.push(
                  `--color-red-active-back: ${
                    color.light.red.active.shadow.startsWith("--")
                      ? `var(${color.light.red.active.shadow});`
                      : `${color.light.red.active.shadow};`
                  }`
                );
              }
            }
          }
          if (color.light.orange) {
            if (color.light.orange.default) {
              if (color.light.orange.default.fore) {
                nextLightSchemeStyles.push(
                  `--color-orange-fore: ${
                    color.light.orange.default.fore.startsWith("--")
                      ? `var(${color.light.orange.default.fore});`
                      : `${color.light.orange.default.fore};`
                  }`
                );
              }
              if (color.light.orange.default.back) {
                nextLightSchemeStyles.push(
                  `--color-orange-back: ${
                    color.light.orange.default.back.startsWith("--")
                      ? `var(${color.light.orange.default.back});`
                      : `${color.light.orange.default.back};`
                  }`
                );
              }
              if (color.light.orange.default.border) {
                nextLightSchemeStyles.push(
                  `--color-orange-border: ${
                    color.light.orange.default.border.startsWith("--")
                      ? `var(${color.light.orange.default.border});`
                      : `${color.light.orange.default.border};`
                  }`
                );
              }
              if (color.light.orange.default.shadow) {
                nextLightSchemeStyles.push(
                  `--color-orange-back: ${
                    color.light.orange.default.shadow.startsWith("--")
                      ? `var(${color.light.orange.default.shadow});`
                      : `${color.light.orange.default.shadow};`
                  }`
                );
              }
            }
            if (color.light.orange.disabled) {
              if (color.light.orange.disabled.fore) {
                nextLightSchemeStyles.push(
                  `--color-orange-disabled-fore: ${
                    color.light.orange.disabled.fore.startsWith("--")
                      ? `var(${color.light.orange.disabled.fore});`
                      : `${color.light.orange.disabled.fore};`
                  }`
                );
              }
              if (color.light.orange.disabled.back) {
                nextLightSchemeStyles.push(
                  `--color-orange-disabled-back: ${
                    color.light.orange.disabled.back.startsWith("--")
                      ? `var(${color.light.orange.disabled.back});`
                      : `${color.light.orange.disabled.back};`
                  }`
                );
              }
              if (color.light.orange.disabled.border) {
                nextLightSchemeStyles.push(
                  `--color-orange-disabled-border: ${
                    color.light.orange.disabled.border.startsWith("--")
                      ? `var(${color.light.orange.disabled.border});`
                      : `${color.light.orange.disabled.border};`
                  }`
                );
              }
              if (color.light.orange.disabled.shadow) {
                nextLightSchemeStyles.push(
                  `--color-orange-disabled-back: ${
                    color.light.orange.disabled.shadow.startsWith("--")
                      ? `var(${color.light.orange.disabled.shadow});`
                      : `${color.light.orange.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.light.orange.hover) {
              if (color.light.orange.hover.fore) {
                nextLightSchemeStyles.push(
                  `--color-orange-hover-fore: ${
                    color.light.orange.hover.fore.startsWith("--")
                      ? `var(${color.light.orange.hover.fore});`
                      : `${color.light.orange.hover.fore};`
                  }`
                );
              }
              if (color.light.orange.hover.back) {
                nextLightSchemeStyles.push(
                  `--color-orange-hover-back: ${
                    color.light.orange.hover.back.startsWith("--")
                      ? `var(${color.light.orange.hover.back});`
                      : `${color.light.orange.hover.back};`
                  }`
                );
              }
              if (color.light.orange.hover.border) {
                nextLightSchemeStyles.push(
                  `--color-orange-hover-border: ${
                    color.light.orange.hover.border.startsWith("--")
                      ? `var(${color.light.orange.hover.border});`
                      : `${color.light.orange.hover.border};`
                  }`
                );
              }
              if (color.light.orange.hover.shadow) {
                nextLightSchemeStyles.push(
                  `--color-orange-hover-back: ${
                    color.light.orange.hover.shadow.startsWith("--")
                      ? `var(${color.light.orange.hover.shadow});`
                      : `${color.light.orange.hover.shadow};`
                  }`
                );
              }
            }
            if (color.light.orange.focus) {
              if (color.light.orange.focus.fore) {
                nextLightSchemeStyles.push(
                  `--color-orange-focus-fore: ${
                    color.light.orange.focus.fore.startsWith("--")
                      ? `var(${color.light.orange.focus.fore});`
                      : `${color.light.orange.focus.fore};`
                  }`
                );
              }
              if (color.light.orange.focus.back) {
                nextLightSchemeStyles.push(
                  `--color-orange-focus-back: ${
                    color.light.orange.focus.back.startsWith("--")
                      ? `var(${color.light.orange.focus.back});`
                      : `${color.light.orange.focus.back};`
                  }`
                );
              }
              if (color.light.orange.focus.border) {
                nextLightSchemeStyles.push(
                  `--color-orange-focus-border: ${
                    color.light.orange.focus.border.startsWith("--")
                      ? `var(${color.light.orange.focus.border});`
                      : `${color.light.orange.focus.border};`
                  }`
                );
              }
              if (color.light.orange.focus.shadow) {
                nextLightSchemeStyles.push(
                  `--color-orange-focus-back: ${
                    color.light.orange.focus.shadow.startsWith("--")
                      ? `var(${color.light.orange.focus.shadow});`
                      : `${color.light.orange.focus.shadow};`
                  }`
                );
              }
            }
            if (color.light.orange.active) {
              if (color.light.orange.active.fore) {
                nextLightSchemeStyles.push(
                  `--color-orange-active-fore: ${
                    color.light.orange.active.fore.startsWith("--")
                      ? `var(${color.light.orange.active.fore});`
                      : `${color.light.orange.active.fore};`
                  }`
                );
              }
              if (color.light.orange.active.back) {
                nextLightSchemeStyles.push(
                  `--color-orange-active-back: ${
                    color.light.orange.active.back.startsWith("--")
                      ? `var(${color.light.orange.active.back});`
                      : `${color.light.orange.active.back};`
                  }`
                );
              }
              if (color.light.orange.active.border) {
                nextLightSchemeStyles.push(
                  `--color-orange-active-border: ${
                    color.light.orange.active.border.startsWith("--")
                      ? `var(${color.light.orange.active.border});`
                      : `${color.light.orange.active.border};`
                  }`
                );
              }
              if (color.light.orange.active.shadow) {
                nextLightSchemeStyles.push(
                  `--color-orange-active-back: ${
                    color.light.orange.active.shadow.startsWith("--")
                      ? `var(${color.light.orange.active.shadow});`
                      : `${color.light.orange.active.shadow};`
                  }`
                );
              }
            }
          }
          if (color.light.yellow) {
            if (color.light.yellow.default) {
              if (color.light.yellow.default.fore) {
                nextLightSchemeStyles.push(
                  `--color-yellow-fore: ${
                    color.light.yellow.default.fore.startsWith("--")
                      ? `var(${color.light.yellow.default.fore});`
                      : `${color.light.yellow.default.fore};`
                  }`
                );
              }
              if (color.light.yellow.default.back) {
                nextLightSchemeStyles.push(
                  `--color-yellow-back: ${
                    color.light.yellow.default.back.startsWith("--")
                      ? `var(${color.light.yellow.default.back});`
                      : `${color.light.yellow.default.back};`
                  }`
                );
              }
              if (color.light.yellow.default.border) {
                nextLightSchemeStyles.push(
                  `--color-yellow-border: ${
                    color.light.yellow.default.border.startsWith("--")
                      ? `var(${color.light.yellow.default.border});`
                      : `${color.light.yellow.default.border};`
                  }`
                );
              }
              if (color.light.yellow.default.shadow) {
                nextLightSchemeStyles.push(
                  `--color-yellow-back: ${
                    color.light.yellow.default.shadow.startsWith("--")
                      ? `var(${color.light.yellow.default.shadow});`
                      : `${color.light.yellow.default.shadow};`
                  }`
                );
              }
            }
            if (color.light.yellow.disabled) {
              if (color.light.yellow.disabled.fore) {
                nextLightSchemeStyles.push(
                  `--color-yellow-disabled-fore: ${
                    color.light.yellow.disabled.fore.startsWith("--")
                      ? `var(${color.light.yellow.disabled.fore});`
                      : `${color.light.yellow.disabled.fore};`
                  }`
                );
              }
              if (color.light.yellow.disabled.back) {
                nextLightSchemeStyles.push(
                  `--color-yellow-disabled-back: ${
                    color.light.yellow.disabled.back.startsWith("--")
                      ? `var(${color.light.yellow.disabled.back});`
                      : `${color.light.yellow.disabled.back};`
                  }`
                );
              }
              if (color.light.yellow.disabled.border) {
                nextLightSchemeStyles.push(
                  `--color-yellow-disabled-border: ${
                    color.light.yellow.disabled.border.startsWith("--")
                      ? `var(${color.light.yellow.disabled.border});`
                      : `${color.light.yellow.disabled.border};`
                  }`
                );
              }
              if (color.light.yellow.disabled.shadow) {
                nextLightSchemeStyles.push(
                  `--color-yellow-disabled-back: ${
                    color.light.yellow.disabled.shadow.startsWith("--")
                      ? `var(${color.light.yellow.disabled.shadow});`
                      : `${color.light.yellow.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.light.yellow.hover) {
              if (color.light.yellow.hover.fore) {
                nextLightSchemeStyles.push(
                  `--color-yellow-hover-fore: ${
                    color.light.yellow.hover.fore.startsWith("--")
                      ? `var(${color.light.yellow.hover.fore});`
                      : `${color.light.yellow.hover.fore};`
                  }`
                );
              }
              if (color.light.yellow.hover.back) {
                nextLightSchemeStyles.push(
                  `--color-yellow-hover-back: ${
                    color.light.yellow.hover.back.startsWith("--")
                      ? `var(${color.light.yellow.hover.back});`
                      : `${color.light.yellow.hover.back};`
                  }`
                );
              }
              if (color.light.yellow.hover.border) {
                nextLightSchemeStyles.push(
                  `--color-yellow-hover-border: ${
                    color.light.yellow.hover.border.startsWith("--")
                      ? `var(${color.light.yellow.hover.border});`
                      : `${color.light.yellow.hover.border};`
                  }`
                );
              }
              if (color.light.yellow.hover.shadow) {
                nextLightSchemeStyles.push(
                  `--color-yellow-hover-back: ${
                    color.light.yellow.hover.shadow.startsWith("--")
                      ? `var(${color.light.yellow.hover.shadow});`
                      : `${color.light.yellow.hover.shadow};`
                  }`
                );
              }
            }
            if (color.light.yellow.focus) {
              if (color.light.yellow.focus.fore) {
                nextLightSchemeStyles.push(
                  `--color-yellow-focus-fore: ${
                    color.light.yellow.focus.fore.startsWith("--")
                      ? `var(${color.light.yellow.focus.fore});`
                      : `${color.light.yellow.focus.fore};`
                  }`
                );
              }
              if (color.light.yellow.focus.back) {
                nextLightSchemeStyles.push(
                  `--color-yellow-focus-back: ${
                    color.light.yellow.focus.back.startsWith("--")
                      ? `var(${color.light.yellow.focus.back});`
                      : `${color.light.yellow.focus.back};`
                  }`
                );
              }
              if (color.light.yellow.focus.border) {
                nextLightSchemeStyles.push(
                  `--color-yellow-focus-border: ${
                    color.light.yellow.focus.border.startsWith("--")
                      ? `var(${color.light.yellow.focus.border});`
                      : `${color.light.yellow.focus.border};`
                  }`
                );
              }
              if (color.light.yellow.focus.shadow) {
                nextLightSchemeStyles.push(
                  `--color-yellow-focus-back: ${
                    color.light.yellow.focus.shadow.startsWith("--")
                      ? `var(${color.light.yellow.focus.shadow});`
                      : `${color.light.yellow.focus.shadow};`
                  }`
                );
              }
            }
            if (color.light.yellow.active) {
              if (color.light.yellow.active.fore) {
                nextLightSchemeStyles.push(
                  `--color-yellow-active-fore: ${
                    color.light.yellow.active.fore.startsWith("--")
                      ? `var(${color.light.yellow.active.fore});`
                      : `${color.light.yellow.active.fore};`
                  }`
                );
              }
              if (color.light.yellow.active.back) {
                nextLightSchemeStyles.push(
                  `--color-yellow-active-back: ${
                    color.light.yellow.active.back.startsWith("--")
                      ? `var(${color.light.yellow.active.back});`
                      : `${color.light.yellow.active.back};`
                  }`
                );
              }
              if (color.light.yellow.active.border) {
                nextLightSchemeStyles.push(
                  `--color-yellow-active-border: ${
                    color.light.yellow.active.border.startsWith("--")
                      ? `var(${color.light.yellow.active.border});`
                      : `${color.light.yellow.active.border};`
                  }`
                );
              }
              if (color.light.yellow.active.shadow) {
                nextLightSchemeStyles.push(
                  `--color-yellow-active-back: ${
                    color.light.yellow.active.shadow.startsWith("--")
                      ? `var(${color.light.yellow.active.shadow});`
                      : `${color.light.yellow.active.shadow};`
                  }`
                );
              }
            }
          }
          if (color.light.green) {
            if (color.light.green.default) {
              if (color.light.green.default.fore) {
                nextLightSchemeStyles.push(
                  `--color-green-fore: ${
                    color.light.green.default.fore.startsWith("--")
                      ? `var(${color.light.green.default.fore});`
                      : `${color.light.green.default.fore};`
                  }`
                );
              }
              if (color.light.green.default.back) {
                nextLightSchemeStyles.push(
                  `--color-green-back: ${
                    color.light.green.default.back.startsWith("--")
                      ? `var(${color.light.green.default.back});`
                      : `${color.light.green.default.back};`
                  }`
                );
              }
              if (color.light.green.default.border) {
                nextLightSchemeStyles.push(
                  `--color-green-border: ${
                    color.light.green.default.border.startsWith("--")
                      ? `var(${color.light.green.default.border});`
                      : `${color.light.green.default.border};`
                  }`
                );
              }
              if (color.light.green.default.shadow) {
                nextLightSchemeStyles.push(
                  `--color-green-back: ${
                    color.light.green.default.shadow.startsWith("--")
                      ? `var(${color.light.green.default.shadow});`
                      : `${color.light.green.default.shadow};`
                  }`
                );
              }
            }
            if (color.light.green.disabled) {
              if (color.light.green.disabled.fore) {
                nextLightSchemeStyles.push(
                  `--color-green-disabled-fore: ${
                    color.light.green.disabled.fore.startsWith("--")
                      ? `var(${color.light.green.disabled.fore});`
                      : `${color.light.green.disabled.fore};`
                  }`
                );
              }
              if (color.light.green.disabled.back) {
                nextLightSchemeStyles.push(
                  `--color-green-disabled-back: ${
                    color.light.green.disabled.back.startsWith("--")
                      ? `var(${color.light.green.disabled.back});`
                      : `${color.light.green.disabled.back};`
                  }`
                );
              }
              if (color.light.green.disabled.border) {
                nextLightSchemeStyles.push(
                  `--color-green-disabled-border: ${
                    color.light.green.disabled.border.startsWith("--")
                      ? `var(${color.light.green.disabled.border});`
                      : `${color.light.green.disabled.border};`
                  }`
                );
              }
              if (color.light.green.disabled.shadow) {
                nextLightSchemeStyles.push(
                  `--color-green-disabled-back: ${
                    color.light.green.disabled.shadow.startsWith("--")
                      ? `var(${color.light.green.disabled.shadow});`
                      : `${color.light.green.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.light.green.hover) {
              if (color.light.green.hover.fore) {
                nextLightSchemeStyles.push(
                  `--color-green-hover-fore: ${
                    color.light.green.hover.fore.startsWith("--")
                      ? `var(${color.light.green.hover.fore});`
                      : `${color.light.green.hover.fore};`
                  }`
                );
              }
              if (color.light.green.hover.back) {
                nextLightSchemeStyles.push(
                  `--color-green-hover-back: ${
                    color.light.green.hover.back.startsWith("--")
                      ? `var(${color.light.green.hover.back});`
                      : `${color.light.green.hover.back};`
                  }`
                );
              }
              if (color.light.green.hover.border) {
                nextLightSchemeStyles.push(
                  `--color-green-hover-border: ${
                    color.light.green.hover.border.startsWith("--")
                      ? `var(${color.light.green.hover.border});`
                      : `${color.light.green.hover.border};`
                  }`
                );
              }
              if (color.light.green.hover.shadow) {
                nextLightSchemeStyles.push(
                  `--color-green-hover-back: ${
                    color.light.green.hover.shadow.startsWith("--")
                      ? `var(${color.light.green.hover.shadow});`
                      : `${color.light.green.hover.shadow};`
                  }`
                );
              }
            }
            if (color.light.green.focus) {
              if (color.light.green.focus.fore) {
                nextLightSchemeStyles.push(
                  `--color-green-focus-fore: ${
                    color.light.green.focus.fore.startsWith("--")
                      ? `var(${color.light.green.focus.fore});`
                      : `${color.light.green.focus.fore};`
                  }`
                );
              }
              if (color.light.green.focus.back) {
                nextLightSchemeStyles.push(
                  `--color-green-focus-back: ${
                    color.light.green.focus.back.startsWith("--")
                      ? `var(${color.light.green.focus.back});`
                      : `${color.light.green.focus.back};`
                  }`
                );
              }
              if (color.light.green.focus.border) {
                nextLightSchemeStyles.push(
                  `--color-green-focus-border: ${
                    color.light.green.focus.border.startsWith("--")
                      ? `var(${color.light.green.focus.border});`
                      : `${color.light.green.focus.border};`
                  }`
                );
              }
              if (color.light.green.focus.shadow) {
                nextLightSchemeStyles.push(
                  `--color-green-focus-back: ${
                    color.light.green.focus.shadow.startsWith("--")
                      ? `var(${color.light.green.focus.shadow});`
                      : `${color.light.green.focus.shadow};`
                  }`
                );
              }
            }
            if (color.light.green.active) {
              if (color.light.green.active.fore) {
                nextLightSchemeStyles.push(
                  `--color-green-active-fore: ${
                    color.light.green.active.fore.startsWith("--")
                      ? `var(${color.light.green.active.fore});`
                      : `${color.light.green.active.fore};`
                  }`
                );
              }
              if (color.light.green.active.back) {
                nextLightSchemeStyles.push(
                  `--color-green-active-back: ${
                    color.light.green.active.back.startsWith("--")
                      ? `var(${color.light.green.active.back});`
                      : `${color.light.green.active.back};`
                  }`
                );
              }
              if (color.light.green.active.border) {
                nextLightSchemeStyles.push(
                  `--color-green-active-border: ${
                    color.light.green.active.border.startsWith("--")
                      ? `var(${color.light.green.active.border});`
                      : `${color.light.green.active.border};`
                  }`
                );
              }
              if (color.light.green.active.shadow) {
                nextLightSchemeStyles.push(
                  `--color-green-active-back: ${
                    color.light.green.active.shadow.startsWith("--")
                      ? `var(${color.light.green.active.shadow});`
                      : `${color.light.green.active.shadow};`
                  }`
                );
              }
            }
          }
          if (color.light.cyan) {
            if (color.light.cyan.default) {
              if (color.light.cyan.default.fore) {
                nextLightSchemeStyles.push(
                  `--color-cyan-fore: ${
                    color.light.cyan.default.fore.startsWith("--")
                      ? `var(${color.light.cyan.default.fore});`
                      : `${color.light.cyan.default.fore};`
                  }`
                );
              }
              if (color.light.cyan.default.back) {
                nextLightSchemeStyles.push(
                  `--color-cyan-back: ${
                    color.light.cyan.default.back.startsWith("--")
                      ? `var(${color.light.cyan.default.back});`
                      : `${color.light.cyan.default.back};`
                  }`
                );
              }
              if (color.light.cyan.default.border) {
                nextLightSchemeStyles.push(
                  `--color-cyan-border: ${
                    color.light.cyan.default.border.startsWith("--")
                      ? `var(${color.light.cyan.default.border});`
                      : `${color.light.cyan.default.border};`
                  }`
                );
              }
              if (color.light.cyan.default.shadow) {
                nextLightSchemeStyles.push(
                  `--color-cyan-back: ${
                    color.light.cyan.default.shadow.startsWith("--")
                      ? `var(${color.light.cyan.default.shadow});`
                      : `${color.light.cyan.default.shadow};`
                  }`
                );
              }
            }
            if (color.light.cyan.disabled) {
              if (color.light.cyan.disabled.fore) {
                nextLightSchemeStyles.push(
                  `--color-cyan-disabled-fore: ${
                    color.light.cyan.disabled.fore.startsWith("--")
                      ? `var(${color.light.cyan.disabled.fore});`
                      : `${color.light.cyan.disabled.fore};`
                  }`
                );
              }
              if (color.light.cyan.disabled.back) {
                nextLightSchemeStyles.push(
                  `--color-cyan-disabled-back: ${
                    color.light.cyan.disabled.back.startsWith("--")
                      ? `var(${color.light.cyan.disabled.back});`
                      : `${color.light.cyan.disabled.back};`
                  }`
                );
              }
              if (color.light.cyan.disabled.border) {
                nextLightSchemeStyles.push(
                  `--color-cyan-disabled-border: ${
                    color.light.cyan.disabled.border.startsWith("--")
                      ? `var(${color.light.cyan.disabled.border});`
                      : `${color.light.cyan.disabled.border};`
                  }`
                );
              }
              if (color.light.cyan.disabled.shadow) {
                nextLightSchemeStyles.push(
                  `--color-cyan-disabled-back: ${
                    color.light.cyan.disabled.shadow.startsWith("--")
                      ? `var(${color.light.cyan.disabled.shadow});`
                      : `${color.light.cyan.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.light.cyan.hover) {
              if (color.light.cyan.hover.fore) {
                nextLightSchemeStyles.push(
                  `--color-cyan-hover-fore: ${
                    color.light.cyan.hover.fore.startsWith("--")
                      ? `var(${color.light.cyan.hover.fore});`
                      : `${color.light.cyan.hover.fore};`
                  }`
                );
              }
              if (color.light.cyan.hover.back) {
                nextLightSchemeStyles.push(
                  `--color-cyan-hover-back: ${
                    color.light.cyan.hover.back.startsWith("--")
                      ? `var(${color.light.cyan.hover.back});`
                      : `${color.light.cyan.hover.back};`
                  }`
                );
              }
              if (color.light.cyan.hover.border) {
                nextLightSchemeStyles.push(
                  `--color-cyan-hover-border: ${
                    color.light.cyan.hover.border.startsWith("--")
                      ? `var(${color.light.cyan.hover.border});`
                      : `${color.light.cyan.hover.border};`
                  }`
                );
              }
              if (color.light.cyan.hover.shadow) {
                nextLightSchemeStyles.push(
                  `--color-cyan-hover-back: ${
                    color.light.cyan.hover.shadow.startsWith("--")
                      ? `var(${color.light.cyan.hover.shadow});`
                      : `${color.light.cyan.hover.shadow};`
                  }`
                );
              }
            }
            if (color.light.cyan.focus) {
              if (color.light.cyan.focus.fore) {
                nextLightSchemeStyles.push(
                  `--color-cyan-focus-fore: ${
                    color.light.cyan.focus.fore.startsWith("--")
                      ? `var(${color.light.cyan.focus.fore});`
                      : `${color.light.cyan.focus.fore};`
                  }`
                );
              }
              if (color.light.cyan.focus.back) {
                nextLightSchemeStyles.push(
                  `--color-cyan-focus-back: ${
                    color.light.cyan.focus.back.startsWith("--")
                      ? `var(${color.light.cyan.focus.back});`
                      : `${color.light.cyan.focus.back};`
                  }`
                );
              }
              if (color.light.cyan.focus.border) {
                nextLightSchemeStyles.push(
                  `--color-cyan-focus-border: ${
                    color.light.cyan.focus.border.startsWith("--")
                      ? `var(${color.light.cyan.focus.border});`
                      : `${color.light.cyan.focus.border};`
                  }`
                );
              }
              if (color.light.cyan.focus.shadow) {
                nextLightSchemeStyles.push(
                  `--color-cyan-focus-back: ${
                    color.light.cyan.focus.shadow.startsWith("--")
                      ? `var(${color.light.cyan.focus.shadow});`
                      : `${color.light.cyan.focus.shadow};`
                  }`
                );
              }
            }
            if (color.light.cyan.active) {
              if (color.light.cyan.active.fore) {
                nextLightSchemeStyles.push(
                  `--color-cyan-active-fore: ${
                    color.light.cyan.active.fore.startsWith("--")
                      ? `var(${color.light.cyan.active.fore});`
                      : `${color.light.cyan.active.fore};`
                  }`
                );
              }
              if (color.light.cyan.active.back) {
                nextLightSchemeStyles.push(
                  `--color-cyan-active-back: ${
                    color.light.cyan.active.back.startsWith("--")
                      ? `var(${color.light.cyan.active.back});`
                      : `${color.light.cyan.active.back};`
                  }`
                );
              }
              if (color.light.cyan.active.border) {
                nextLightSchemeStyles.push(
                  `--color-cyan-active-border: ${
                    color.light.cyan.active.border.startsWith("--")
                      ? `var(${color.light.cyan.active.border});`
                      : `${color.light.cyan.active.border};`
                  }`
                );
              }
              if (color.light.cyan.active.shadow) {
                nextLightSchemeStyles.push(
                  `--color-cyan-active-back: ${
                    color.light.cyan.active.shadow.startsWith("--")
                      ? `var(${color.light.cyan.active.shadow});`
                      : `${color.light.cyan.active.shadow};`
                  }`
                );
              }
            }
          }
          if (color.light.blue) {
            if (color.light.blue.default) {
              if (color.light.blue.default.fore) {
                nextLightSchemeStyles.push(
                  `--color-blue-fore: ${
                    color.light.blue.default.fore.startsWith("--")
                      ? `var(${color.light.blue.default.fore});`
                      : `${color.light.blue.default.fore};`
                  }`
                );
              }
              if (color.light.blue.default.back) {
                nextLightSchemeStyles.push(
                  `--color-blue-back: ${
                    color.light.blue.default.back.startsWith("--")
                      ? `var(${color.light.blue.default.back});`
                      : `${color.light.blue.default.back};`
                  }`
                );
              }
              if (color.light.blue.default.border) {
                nextLightSchemeStyles.push(
                  `--color-blue-border: ${
                    color.light.blue.default.border.startsWith("--")
                      ? `var(${color.light.blue.default.border});`
                      : `${color.light.blue.default.border};`
                  }`
                );
              }
              if (color.light.blue.default.shadow) {
                nextLightSchemeStyles.push(
                  `--color-blue-back: ${
                    color.light.blue.default.shadow.startsWith("--")
                      ? `var(${color.light.blue.default.shadow});`
                      : `${color.light.blue.default.shadow};`
                  }`
                );
              }
            }
            if (color.light.blue.disabled) {
              if (color.light.blue.disabled.fore) {
                nextLightSchemeStyles.push(
                  `--color-blue-disabled-fore: ${
                    color.light.blue.disabled.fore.startsWith("--")
                      ? `var(${color.light.blue.disabled.fore});`
                      : `${color.light.blue.disabled.fore};`
                  }`
                );
              }
              if (color.light.blue.disabled.back) {
                nextLightSchemeStyles.push(
                  `--color-blue-disabled-back: ${
                    color.light.blue.disabled.back.startsWith("--")
                      ? `var(${color.light.blue.disabled.back});`
                      : `${color.light.blue.disabled.back};`
                  }`
                );
              }
              if (color.light.blue.disabled.border) {
                nextLightSchemeStyles.push(
                  `--color-blue-disabled-border: ${
                    color.light.blue.disabled.border.startsWith("--")
                      ? `var(${color.light.blue.disabled.border});`
                      : `${color.light.blue.disabled.border};`
                  }`
                );
              }
              if (color.light.blue.disabled.shadow) {
                nextLightSchemeStyles.push(
                  `--color-blue-disabled-back: ${
                    color.light.blue.disabled.shadow.startsWith("--")
                      ? `var(${color.light.blue.disabled.shadow});`
                      : `${color.light.blue.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.light.blue.hover) {
              if (color.light.blue.hover.fore) {
                nextLightSchemeStyles.push(
                  `--color-blue-hover-fore: ${
                    color.light.blue.hover.fore.startsWith("--")
                      ? `var(${color.light.blue.hover.fore});`
                      : `${color.light.blue.hover.fore};`
                  }`
                );
              }
              if (color.light.blue.hover.back) {
                nextLightSchemeStyles.push(
                  `--color-blue-hover-back: ${
                    color.light.blue.hover.back.startsWith("--")
                      ? `var(${color.light.blue.hover.back});`
                      : `${color.light.blue.hover.back};`
                  }`
                );
              }
              if (color.light.blue.hover.border) {
                nextLightSchemeStyles.push(
                  `--color-blue-hover-border: ${
                    color.light.blue.hover.border.startsWith("--")
                      ? `var(${color.light.blue.hover.border});`
                      : `${color.light.blue.hover.border};`
                  }`
                );
              }
              if (color.light.blue.hover.shadow) {
                nextLightSchemeStyles.push(
                  `--color-blue-hover-back: ${
                    color.light.blue.hover.shadow.startsWith("--")
                      ? `var(${color.light.blue.hover.shadow});`
                      : `${color.light.blue.hover.shadow};`
                  }`
                );
              }
            }
            if (color.light.blue.focus) {
              if (color.light.blue.focus.fore) {
                nextLightSchemeStyles.push(
                  `--color-blue-focus-fore: ${
                    color.light.blue.focus.fore.startsWith("--")
                      ? `var(${color.light.blue.focus.fore});`
                      : `${color.light.blue.focus.fore};`
                  }`
                );
              }
              if (color.light.blue.focus.back) {
                nextLightSchemeStyles.push(
                  `--color-blue-focus-back: ${
                    color.light.blue.focus.back.startsWith("--")
                      ? `var(${color.light.blue.focus.back});`
                      : `${color.light.blue.focus.back};`
                  }`
                );
              }
              if (color.light.blue.focus.border) {
                nextLightSchemeStyles.push(
                  `--color-blue-focus-border: ${
                    color.light.blue.focus.border.startsWith("--")
                      ? `var(${color.light.blue.focus.border});`
                      : `${color.light.blue.focus.border};`
                  }`
                );
              }
              if (color.light.blue.focus.shadow) {
                nextLightSchemeStyles.push(
                  `--color-blue-focus-back: ${
                    color.light.blue.focus.shadow.startsWith("--")
                      ? `var(${color.light.blue.focus.shadow});`
                      : `${color.light.blue.focus.shadow};`
                  }`
                );
              }
            }
            if (color.light.blue.active) {
              if (color.light.blue.active.fore) {
                nextLightSchemeStyles.push(
                  `--color-blue-active-fore: ${
                    color.light.blue.active.fore.startsWith("--")
                      ? `var(${color.light.blue.active.fore});`
                      : `${color.light.blue.active.fore};`
                  }`
                );
              }
              if (color.light.blue.active.back) {
                nextLightSchemeStyles.push(
                  `--color-blue-active-back: ${
                    color.light.blue.active.back.startsWith("--")
                      ? `var(${color.light.blue.active.back});`
                      : `${color.light.blue.active.back};`
                  }`
                );
              }
              if (color.light.blue.active.border) {
                nextLightSchemeStyles.push(
                  `--color-blue-active-border: ${
                    color.light.blue.active.border.startsWith("--")
                      ? `var(${color.light.blue.active.border});`
                      : `${color.light.blue.active.border};`
                  }`
                );
              }
              if (color.light.blue.active.shadow) {
                nextLightSchemeStyles.push(
                  `--color-blue-active-back: ${
                    color.light.blue.active.shadow.startsWith("--")
                      ? `var(${color.light.blue.active.shadow});`
                      : `${color.light.blue.active.shadow};`
                  }`
                );
              }
            }
          }
          if (color.light.violet) {
            if (color.light.violet.default) {
              if (color.light.violet.default.fore) {
                nextLightSchemeStyles.push(
                  `--color-violet-fore: ${
                    color.light.violet.default.fore.startsWith("--")
                      ? `var(${color.light.violet.default.fore});`
                      : `${color.light.violet.default.fore};`
                  }`
                );
              }
              if (color.light.violet.default.back) {
                nextLightSchemeStyles.push(
                  `--color-violet-back: ${
                    color.light.violet.default.back.startsWith("--")
                      ? `var(${color.light.violet.default.back});`
                      : `${color.light.violet.default.back};`
                  }`
                );
              }
              if (color.light.violet.default.border) {
                nextLightSchemeStyles.push(
                  `--color-violet-border: ${
                    color.light.violet.default.border.startsWith("--")
                      ? `var(${color.light.violet.default.border});`
                      : `${color.light.violet.default.border};`
                  }`
                );
              }
              if (color.light.violet.default.shadow) {
                nextLightSchemeStyles.push(
                  `--color-violet-back: ${
                    color.light.violet.default.shadow.startsWith("--")
                      ? `var(${color.light.violet.default.shadow});`
                      : `${color.light.violet.default.shadow};`
                  }`
                );
              }
            }
            if (color.light.violet.disabled) {
              if (color.light.violet.disabled.fore) {
                nextLightSchemeStyles.push(
                  `--color-violet-disabled-fore: ${
                    color.light.violet.disabled.fore.startsWith("--")
                      ? `var(${color.light.violet.disabled.fore});`
                      : `${color.light.violet.disabled.fore};`
                  }`
                );
              }
              if (color.light.violet.disabled.back) {
                nextLightSchemeStyles.push(
                  `--color-violet-disabled-back: ${
                    color.light.violet.disabled.back.startsWith("--")
                      ? `var(${color.light.violet.disabled.back});`
                      : `${color.light.violet.disabled.back};`
                  }`
                );
              }
              if (color.light.violet.disabled.border) {
                nextLightSchemeStyles.push(
                  `--color-violet-disabled-border: ${
                    color.light.violet.disabled.border.startsWith("--")
                      ? `var(${color.light.violet.disabled.border});`
                      : `${color.light.violet.disabled.border};`
                  }`
                );
              }
              if (color.light.violet.disabled.shadow) {
                nextLightSchemeStyles.push(
                  `--color-violet-disabled-back: ${
                    color.light.violet.disabled.shadow.startsWith("--")
                      ? `var(${color.light.violet.disabled.shadow});`
                      : `${color.light.violet.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.light.violet.hover) {
              if (color.light.violet.hover.fore) {
                nextLightSchemeStyles.push(
                  `--color-violet-hover-fore: ${
                    color.light.violet.hover.fore.startsWith("--")
                      ? `var(${color.light.violet.hover.fore});`
                      : `${color.light.violet.hover.fore};`
                  }`
                );
              }
              if (color.light.violet.hover.back) {
                nextLightSchemeStyles.push(
                  `--color-violet-hover-back: ${
                    color.light.violet.hover.back.startsWith("--")
                      ? `var(${color.light.violet.hover.back});`
                      : `${color.light.violet.hover.back};`
                  }`
                );
              }
              if (color.light.violet.hover.border) {
                nextLightSchemeStyles.push(
                  `--color-violet-hover-border: ${
                    color.light.violet.hover.border.startsWith("--")
                      ? `var(${color.light.violet.hover.border});`
                      : `${color.light.violet.hover.border};`
                  }`
                );
              }
              if (color.light.violet.hover.shadow) {
                nextLightSchemeStyles.push(
                  `--color-violet-hover-back: ${
                    color.light.violet.hover.shadow.startsWith("--")
                      ? `var(${color.light.violet.hover.shadow});`
                      : `${color.light.violet.hover.shadow};`
                  }`
                );
              }
            }
            if (color.light.violet.focus) {
              if (color.light.violet.focus.fore) {
                nextLightSchemeStyles.push(
                  `--color-violet-focus-fore: ${
                    color.light.violet.focus.fore.startsWith("--")
                      ? `var(${color.light.violet.focus.fore});`
                      : `${color.light.violet.focus.fore};`
                  }`
                );
              }
              if (color.light.violet.focus.back) {
                nextLightSchemeStyles.push(
                  `--color-violet-focus-back: ${
                    color.light.violet.focus.back.startsWith("--")
                      ? `var(${color.light.violet.focus.back});`
                      : `${color.light.violet.focus.back};`
                  }`
                );
              }
              if (color.light.violet.focus.border) {
                nextLightSchemeStyles.push(
                  `--color-violet-focus-border: ${
                    color.light.violet.focus.border.startsWith("--")
                      ? `var(${color.light.violet.focus.border});`
                      : `${color.light.violet.focus.border};`
                  }`
                );
              }
              if (color.light.violet.focus.shadow) {
                nextLightSchemeStyles.push(
                  `--color-violet-focus-back: ${
                    color.light.violet.focus.shadow.startsWith("--")
                      ? `var(${color.light.violet.focus.shadow});`
                      : `${color.light.violet.focus.shadow};`
                  }`
                );
              }
            }
            if (color.light.violet.active) {
              if (color.light.violet.active.fore) {
                nextLightSchemeStyles.push(
                  `--color-violet-active-fore: ${
                    color.light.violet.active.fore.startsWith("--")
                      ? `var(${color.light.violet.active.fore});`
                      : `${color.light.violet.active.fore};`
                  }`
                );
              }
              if (color.light.violet.active.back) {
                nextLightSchemeStyles.push(
                  `--color-violet-active-back: ${
                    color.light.violet.active.back.startsWith("--")
                      ? `var(${color.light.violet.active.back});`
                      : `${color.light.violet.active.back};`
                  }`
                );
              }
              if (color.light.violet.active.border) {
                nextLightSchemeStyles.push(
                  `--color-violet-active-border: ${
                    color.light.violet.active.border.startsWith("--")
                      ? `var(${color.light.violet.active.border});`
                      : `${color.light.violet.active.border};`
                  }`
                );
              }
              if (color.light.violet.active.shadow) {
                nextLightSchemeStyles.push(
                  `--color-violet-active-back: ${
                    color.light.violet.active.shadow.startsWith("--")
                      ? `var(${color.light.violet.active.shadow});`
                      : `${color.light.violet.active.shadow};`
                  }`
                );
              }
            }
          }
        }
      }
    }
    setLightSchemeStyles(nextLightSchemeStyles);
  }, [props.cssVariableSetting])
  
  useEffect(() => {
    const nextDarkSchemeStyles: string[] = [];
    if (props.cssVariableSetting) {
      if (props.cssVariableSetting.color) {
        const color = props.cssVariableSetting.color;
        if (color.dark) {
          if (color.dark.default) {
            if (color.dark.default.default) {
              if (color.dark.default.default.fore) {
                nextDarkSchemeStyles.push(
                  `--color-default-fore: ${
                    color.dark.default.default.fore.startsWith("--")
                      ? `var(${color.dark.default.default.fore});`
                      : `${color.dark.default.default.fore};`
                  }`
                );
              }
              if (color.dark.default.default.back) {
                nextDarkSchemeStyles.push(
                  `--color-default-back: ${
                    color.dark.default.default.back.startsWith("--")
                      ? `var(${color.dark.default.default.back});`
                      : `${color.dark.default.default.back};`
                  }`
                );
              }
              if (color.dark.default.default.border) {
                nextDarkSchemeStyles.push(
                  `--color-default-border: ${
                    color.dark.default.default.border.startsWith("--")
                      ? `var(${color.dark.default.default.border});`
                      : `${color.dark.default.default.border};`
                  }`
                );
              }
              if (color.dark.default.default.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-default-back: ${
                    color.dark.default.default.shadow.startsWith("--")
                      ? `var(${color.dark.default.default.shadow});`
                      : `${color.dark.default.default.shadow};`
                  }`
                );
              }
            }
            if (color.dark.default.disabled) {
              if (color.dark.default.disabled.fore) {
                nextDarkSchemeStyles.push(
                  `--color-default-disabled-fore: ${
                    color.dark.default.disabled.fore.startsWith("--")
                      ? `var(${color.dark.default.disabled.fore});`
                      : `${color.dark.default.disabled.fore};`
                  }`
                );
              }
              if (color.dark.default.disabled.back) {
                nextDarkSchemeStyles.push(
                  `--color-default-disabled-back: ${
                    color.dark.default.disabled.back.startsWith("--")
                      ? `var(${color.dark.default.disabled.back});`
                      : `${color.dark.default.disabled.back};`
                  }`
                );
              }
              if (color.dark.default.disabled.border) {
                nextDarkSchemeStyles.push(
                  `--color-default-disabled-border: ${
                    color.dark.default.disabled.border.startsWith("--")
                      ? `var(${color.dark.default.disabled.border});`
                      : `${color.dark.default.disabled.border};`
                  }`
                );
              }
              if (color.dark.default.disabled.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-default-disabled-back: ${
                    color.dark.default.disabled.shadow.startsWith("--")
                      ? `var(${color.dark.default.disabled.shadow});`
                      : `${color.dark.default.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.dark.default.hover) {
              if (color.dark.default.hover.fore) {
                nextDarkSchemeStyles.push(
                  `--color-default-hover-fore: ${
                    color.dark.default.hover.fore.startsWith("--")
                      ? `var(${color.dark.default.hover.fore});`
                      : `${color.dark.default.hover.fore};`
                  }`
                );
              }
              if (color.dark.default.hover.back) {
                nextDarkSchemeStyles.push(
                  `--color-default-hover-back: ${
                    color.dark.default.hover.back.startsWith("--")
                      ? `var(${color.dark.default.hover.back});`
                      : `${color.dark.default.hover.back};`
                  }`
                );
              }
              if (color.dark.default.hover.border) {
                nextDarkSchemeStyles.push(
                  `--color-default-hover-border: ${
                    color.dark.default.hover.border.startsWith("--")
                      ? `var(${color.dark.default.hover.border});`
                      : `${color.dark.default.hover.border};`
                  }`
                );
              }
              if (color.dark.default.hover.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-default-hover-back: ${
                    color.dark.default.hover.shadow.startsWith("--")
                      ? `var(${color.dark.default.hover.shadow});`
                      : `${color.dark.default.hover.shadow};`
                  }`
                );
              }
            }
            if (color.dark.default.focus) {
              if (color.dark.default.focus.fore) {
                nextDarkSchemeStyles.push(
                  `--color-default-focus-fore: ${
                    color.dark.default.focus.fore.startsWith("--")
                      ? `var(${color.dark.default.focus.fore});`
                      : `${color.dark.default.focus.fore};`
                  }`
                );
              }
              if (color.dark.default.focus.back) {
                nextDarkSchemeStyles.push(
                  `--color-default-focus-back: ${
                    color.dark.default.focus.back.startsWith("--")
                      ? `var(${color.dark.default.focus.back});`
                      : `${color.dark.default.focus.back};`
                  }`
                );
              }
              if (color.dark.default.focus.border) {
                nextDarkSchemeStyles.push(
                  `--color-default-focus-border: ${
                    color.dark.default.focus.border.startsWith("--")
                      ? `var(${color.dark.default.focus.border});`
                      : `${color.dark.default.focus.border};`
                  }`
                );
              }
              if (color.dark.default.focus.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-default-focus-back: ${
                    color.dark.default.focus.shadow.startsWith("--")
                      ? `var(${color.dark.default.focus.shadow});`
                      : `${color.dark.default.focus.shadow};`
                  }`
                );
              }
            }
            if (color.dark.default.active) {
              if (color.dark.default.active.fore) {
                nextDarkSchemeStyles.push(
                  `--color-default-active-fore: ${
                    color.dark.default.active.fore.startsWith("--")
                      ? `var(${color.dark.default.active.fore});`
                      : `${color.dark.default.active.fore};`
                  }`
                );
              }
              if (color.dark.default.active.back) {
                nextDarkSchemeStyles.push(
                  `--color-default-active-back: ${
                    color.dark.default.active.back.startsWith("--")
                      ? `var(${color.dark.default.active.back});`
                      : `${color.dark.default.active.back};`
                  }`
                );
              }
              if (color.dark.default.active.border) {
                nextDarkSchemeStyles.push(
                  `--color-default-active-border: ${
                    color.dark.default.active.border.startsWith("--")
                      ? `var(${color.dark.default.active.border});`
                      : `${color.dark.default.active.border};`
                  }`
                );
              }
              if (color.dark.default.active.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-default-active-back: ${
                    color.dark.default.active.shadow.startsWith("--")
                      ? `var(${color.dark.default.active.shadow});`
                      : `${color.dark.default.active.shadow};`
                  }`
                );
              }
            }
          }
          if (color.dark.gray) {
            if (color.dark.gray.default) {
              if (color.dark.gray.default.fore) {
                nextDarkSchemeStyles.push(
                  `--color-gray-fore: ${
                    color.dark.gray.default.fore.startsWith("--")
                      ? `var(${color.dark.gray.default.fore});`
                      : `${color.dark.gray.default.fore};`
                  }`
                );
              }
              if (color.dark.gray.default.back) {
                nextDarkSchemeStyles.push(
                  `--color-gray-back: ${
                    color.dark.gray.default.back.startsWith("--")
                      ? `var(${color.dark.gray.default.back});`
                      : `${color.dark.gray.default.back};`
                  }`
                );
              }
              if (color.dark.gray.default.border) {
                nextDarkSchemeStyles.push(
                  `--color-gray-border: ${
                    color.dark.gray.default.border.startsWith("--")
                      ? `var(${color.dark.gray.default.border});`
                      : `${color.dark.gray.default.border};`
                  }`
                );
              }
              if (color.dark.gray.default.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-gray-back: ${
                    color.dark.gray.default.shadow.startsWith("--")
                      ? `var(${color.dark.gray.default.shadow});`
                      : `${color.dark.gray.default.shadow};`
                  }`
                );
              }
            }
            if (color.dark.gray.disabled) {
              if (color.dark.gray.disabled.fore) {
                nextDarkSchemeStyles.push(
                  `--color-gray-disabled-fore: ${
                    color.dark.gray.disabled.fore.startsWith("--")
                      ? `var(${color.dark.gray.disabled.fore});`
                      : `${color.dark.gray.disabled.fore};`
                  }`
                );
              }
              if (color.dark.gray.disabled.back) {
                nextDarkSchemeStyles.push(
                  `--color-gray-disabled-back: ${
                    color.dark.gray.disabled.back.startsWith("--")
                      ? `var(${color.dark.gray.disabled.back});`
                      : `${color.dark.gray.disabled.back};`
                  }`
                );
              }
              if (color.dark.gray.disabled.border) {
                nextDarkSchemeStyles.push(
                  `--color-gray-disabled-border: ${
                    color.dark.gray.disabled.border.startsWith("--")
                      ? `var(${color.dark.gray.disabled.border});`
                      : `${color.dark.gray.disabled.border};`
                  }`
                );
              }
              if (color.dark.gray.disabled.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-gray-disabled-back: ${
                    color.dark.gray.disabled.shadow.startsWith("--")
                      ? `var(${color.dark.gray.disabled.shadow});`
                      : `${color.dark.gray.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.dark.gray.hover) {
              if (color.dark.gray.hover.fore) {
                nextDarkSchemeStyles.push(
                  `--color-gray-hover-fore: ${
                    color.dark.gray.hover.fore.startsWith("--")
                      ? `var(${color.dark.gray.hover.fore});`
                      : `${color.dark.gray.hover.fore};`
                  }`
                );
              }
              if (color.dark.gray.hover.back) {
                nextDarkSchemeStyles.push(
                  `--color-gray-hover-back: ${
                    color.dark.gray.hover.back.startsWith("--")
                      ? `var(${color.dark.gray.hover.back});`
                      : `${color.dark.gray.hover.back};`
                  }`
                );
              }
              if (color.dark.gray.hover.border) {
                nextDarkSchemeStyles.push(
                  `--color-gray-hover-border: ${
                    color.dark.gray.hover.border.startsWith("--")
                      ? `var(${color.dark.gray.hover.border});`
                      : `${color.dark.gray.hover.border};`
                  }`
                );
              }
              if (color.dark.gray.hover.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-gray-hover-back: ${
                    color.dark.gray.hover.shadow.startsWith("--")
                      ? `var(${color.dark.gray.hover.shadow});`
                      : `${color.dark.gray.hover.shadow};`
                  }`
                );
              }
            }
            if (color.dark.gray.focus) {
              if (color.dark.gray.focus.fore) {
                nextDarkSchemeStyles.push(
                  `--color-gray-focus-fore: ${
                    color.dark.gray.focus.fore.startsWith("--")
                      ? `var(${color.dark.gray.focus.fore});`
                      : `${color.dark.gray.focus.fore};`
                  }`
                );
              }
              if (color.dark.gray.focus.back) {
                nextDarkSchemeStyles.push(
                  `--color-gray-focus-back: ${
                    color.dark.gray.focus.back.startsWith("--")
                      ? `var(${color.dark.gray.focus.back});`
                      : `${color.dark.gray.focus.back};`
                  }`
                );
              }
              if (color.dark.gray.focus.border) {
                nextDarkSchemeStyles.push(
                  `--color-gray-focus-border: ${
                    color.dark.gray.focus.border.startsWith("--")
                      ? `var(${color.dark.gray.focus.border});`
                      : `${color.dark.gray.focus.border};`
                  }`
                );
              }
              if (color.dark.gray.focus.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-gray-focus-back: ${
                    color.dark.gray.focus.shadow.startsWith("--")
                      ? `var(${color.dark.gray.focus.shadow});`
                      : `${color.dark.gray.focus.shadow};`
                  }`
                );
              }
            }
            if (color.dark.gray.active) {
              if (color.dark.gray.active.fore) {
                nextDarkSchemeStyles.push(
                  `--color-gray-active-fore: ${
                    color.dark.gray.active.fore.startsWith("--")
                      ? `var(${color.dark.gray.active.fore});`
                      : `${color.dark.gray.active.fore};`
                  }`
                );
              }
              if (color.dark.gray.active.back) {
                nextDarkSchemeStyles.push(
                  `--color-gray-active-back: ${
                    color.dark.gray.active.back.startsWith("--")
                      ? `var(${color.dark.gray.active.back});`
                      : `${color.dark.gray.active.back};`
                  }`
                );
              }
              if (color.dark.gray.active.border) {
                nextDarkSchemeStyles.push(
                  `--color-gray-active-border: ${
                    color.dark.gray.active.border.startsWith("--")
                      ? `var(${color.dark.gray.active.border});`
                      : `${color.dark.gray.active.border};`
                  }`
                );
              }
              if (color.dark.gray.active.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-gray-active-back: ${
                    color.dark.gray.active.shadow.startsWith("--")
                      ? `var(${color.dark.gray.active.shadow});`
                      : `${color.dark.gray.active.shadow};`
                  }`
                );
              }
            }
          }
          if (color.dark.red) {
            if (color.dark.red.default) {
              if (color.dark.red.default.fore) {
                nextDarkSchemeStyles.push(
                  `--color-red-fore: ${
                    color.dark.red.default.fore.startsWith("--")
                      ? `var(${color.dark.red.default.fore});`
                      : `${color.dark.red.default.fore};`
                  }`
                );
              }
              if (color.dark.red.default.back) {
                nextDarkSchemeStyles.push(
                  `--color-red-back: ${
                    color.dark.red.default.back.startsWith("--")
                      ? `var(${color.dark.red.default.back});`
                      : `${color.dark.red.default.back};`
                  }`
                );
              }
              if (color.dark.red.default.border) {
                nextDarkSchemeStyles.push(
                  `--color-red-border: ${
                    color.dark.red.default.border.startsWith("--")
                      ? `var(${color.dark.red.default.border});`
                      : `${color.dark.red.default.border};`
                  }`
                );
              }
              if (color.dark.red.default.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-red-back: ${
                    color.dark.red.default.shadow.startsWith("--")
                      ? `var(${color.dark.red.default.shadow});`
                      : `${color.dark.red.default.shadow};`
                  }`
                );
              }
            }
            if (color.dark.red.disabled) {
              if (color.dark.red.disabled.fore) {
                nextDarkSchemeStyles.push(
                  `--color-red-disabled-fore: ${
                    color.dark.red.disabled.fore.startsWith("--")
                      ? `var(${color.dark.red.disabled.fore});`
                      : `${color.dark.red.disabled.fore};`
                  }`
                );
              }
              if (color.dark.red.disabled.back) {
                nextDarkSchemeStyles.push(
                  `--color-red-disabled-back: ${
                    color.dark.red.disabled.back.startsWith("--")
                      ? `var(${color.dark.red.disabled.back});`
                      : `${color.dark.red.disabled.back};`
                  }`
                );
              }
              if (color.dark.red.disabled.border) {
                nextDarkSchemeStyles.push(
                  `--color-red-disabled-border: ${
                    color.dark.red.disabled.border.startsWith("--")
                      ? `var(${color.dark.red.disabled.border});`
                      : `${color.dark.red.disabled.border};`
                  }`
                );
              }
              if (color.dark.red.disabled.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-red-disabled-back: ${
                    color.dark.red.disabled.shadow.startsWith("--")
                      ? `var(${color.dark.red.disabled.shadow});`
                      : `${color.dark.red.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.dark.red.hover) {
              if (color.dark.red.hover.fore) {
                nextDarkSchemeStyles.push(
                  `--color-red-hover-fore: ${
                    color.dark.red.hover.fore.startsWith("--")
                      ? `var(${color.dark.red.hover.fore});`
                      : `${color.dark.red.hover.fore};`
                  }`
                );
              }
              if (color.dark.red.hover.back) {
                nextDarkSchemeStyles.push(
                  `--color-red-hover-back: ${
                    color.dark.red.hover.back.startsWith("--")
                      ? `var(${color.dark.red.hover.back});`
                      : `${color.dark.red.hover.back};`
                  }`
                );
              }
              if (color.dark.red.hover.border) {
                nextDarkSchemeStyles.push(
                  `--color-red-hover-border: ${
                    color.dark.red.hover.border.startsWith("--")
                      ? `var(${color.dark.red.hover.border});`
                      : `${color.dark.red.hover.border};`
                  }`
                );
              }
              if (color.dark.red.hover.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-red-hover-back: ${
                    color.dark.red.hover.shadow.startsWith("--")
                      ? `var(${color.dark.red.hover.shadow});`
                      : `${color.dark.red.hover.shadow};`
                  }`
                );
              }
            }
            if (color.dark.red.focus) {
              if (color.dark.red.focus.fore) {
                nextDarkSchemeStyles.push(
                  `--color-red-focus-fore: ${
                    color.dark.red.focus.fore.startsWith("--")
                      ? `var(${color.dark.red.focus.fore});`
                      : `${color.dark.red.focus.fore};`
                  }`
                );
              }
              if (color.dark.red.focus.back) {
                nextDarkSchemeStyles.push(
                  `--color-red-focus-back: ${
                    color.dark.red.focus.back.startsWith("--")
                      ? `var(${color.dark.red.focus.back});`
                      : `${color.dark.red.focus.back};`
                  }`
                );
              }
              if (color.dark.red.focus.border) {
                nextDarkSchemeStyles.push(
                  `--color-red-focus-border: ${
                    color.dark.red.focus.border.startsWith("--")
                      ? `var(${color.dark.red.focus.border});`
                      : `${color.dark.red.focus.border};`
                  }`
                );
              }
              if (color.dark.red.focus.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-red-focus-back: ${
                    color.dark.red.focus.shadow.startsWith("--")
                      ? `var(${color.dark.red.focus.shadow});`
                      : `${color.dark.red.focus.shadow};`
                  }`
                );
              }
            }
            if (color.dark.red.active) {
              if (color.dark.red.active.fore) {
                nextDarkSchemeStyles.push(
                  `--color-red-active-fore: ${
                    color.dark.red.active.fore.startsWith("--")
                      ? `var(${color.dark.red.active.fore});`
                      : `${color.dark.red.active.fore};`
                  }`
                );
              }
              if (color.dark.red.active.back) {
                nextDarkSchemeStyles.push(
                  `--color-red-active-back: ${
                    color.dark.red.active.back.startsWith("--")
                      ? `var(${color.dark.red.active.back});`
                      : `${color.dark.red.active.back};`
                  }`
                );
              }
              if (color.dark.red.active.border) {
                nextDarkSchemeStyles.push(
                  `--color-red-active-border: ${
                    color.dark.red.active.border.startsWith("--")
                      ? `var(${color.dark.red.active.border});`
                      : `${color.dark.red.active.border};`
                  }`
                );
              }
              if (color.dark.red.active.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-red-active-back: ${
                    color.dark.red.active.shadow.startsWith("--")
                      ? `var(${color.dark.red.active.shadow});`
                      : `${color.dark.red.active.shadow};`
                  }`
                );
              }
            }
          }
          if (color.dark.orange) {
            if (color.dark.orange.default) {
              if (color.dark.orange.default.fore) {
                nextDarkSchemeStyles.push(
                  `--color-orange-fore: ${
                    color.dark.orange.default.fore.startsWith("--")
                      ? `var(${color.dark.orange.default.fore});`
                      : `${color.dark.orange.default.fore};`
                  }`
                );
              }
              if (color.dark.orange.default.back) {
                nextDarkSchemeStyles.push(
                  `--color-orange-back: ${
                    color.dark.orange.default.back.startsWith("--")
                      ? `var(${color.dark.orange.default.back});`
                      : `${color.dark.orange.default.back};`
                  }`
                );
              }
              if (color.dark.orange.default.border) {
                nextDarkSchemeStyles.push(
                  `--color-orange-border: ${
                    color.dark.orange.default.border.startsWith("--")
                      ? `var(${color.dark.orange.default.border});`
                      : `${color.dark.orange.default.border};`
                  }`
                );
              }
              if (color.dark.orange.default.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-orange-back: ${
                    color.dark.orange.default.shadow.startsWith("--")
                      ? `var(${color.dark.orange.default.shadow});`
                      : `${color.dark.orange.default.shadow};`
                  }`
                );
              }
            }
            if (color.dark.orange.disabled) {
              if (color.dark.orange.disabled.fore) {
                nextDarkSchemeStyles.push(
                  `--color-orange-disabled-fore: ${
                    color.dark.orange.disabled.fore.startsWith("--")
                      ? `var(${color.dark.orange.disabled.fore});`
                      : `${color.dark.orange.disabled.fore};`
                  }`
                );
              }
              if (color.dark.orange.disabled.back) {
                nextDarkSchemeStyles.push(
                  `--color-orange-disabled-back: ${
                    color.dark.orange.disabled.back.startsWith("--")
                      ? `var(${color.dark.orange.disabled.back});`
                      : `${color.dark.orange.disabled.back};`
                  }`
                );
              }
              if (color.dark.orange.disabled.border) {
                nextDarkSchemeStyles.push(
                  `--color-orange-disabled-border: ${
                    color.dark.orange.disabled.border.startsWith("--")
                      ? `var(${color.dark.orange.disabled.border});`
                      : `${color.dark.orange.disabled.border};`
                  }`
                );
              }
              if (color.dark.orange.disabled.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-orange-disabled-back: ${
                    color.dark.orange.disabled.shadow.startsWith("--")
                      ? `var(${color.dark.orange.disabled.shadow});`
                      : `${color.dark.orange.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.dark.orange.hover) {
              if (color.dark.orange.hover.fore) {
                nextDarkSchemeStyles.push(
                  `--color-orange-hover-fore: ${
                    color.dark.orange.hover.fore.startsWith("--")
                      ? `var(${color.dark.orange.hover.fore});`
                      : `${color.dark.orange.hover.fore};`
                  }`
                );
              }
              if (color.dark.orange.hover.back) {
                nextDarkSchemeStyles.push(
                  `--color-orange-hover-back: ${
                    color.dark.orange.hover.back.startsWith("--")
                      ? `var(${color.dark.orange.hover.back});`
                      : `${color.dark.orange.hover.back};`
                  }`
                );
              }
              if (color.dark.orange.hover.border) {
                nextDarkSchemeStyles.push(
                  `--color-orange-hover-border: ${
                    color.dark.orange.hover.border.startsWith("--")
                      ? `var(${color.dark.orange.hover.border});`
                      : `${color.dark.orange.hover.border};`
                  }`
                );
              }
              if (color.dark.orange.hover.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-orange-hover-back: ${
                    color.dark.orange.hover.shadow.startsWith("--")
                      ? `var(${color.dark.orange.hover.shadow});`
                      : `${color.dark.orange.hover.shadow};`
                  }`
                );
              }
            }
            if (color.dark.orange.focus) {
              if (color.dark.orange.focus.fore) {
                nextDarkSchemeStyles.push(
                  `--color-orange-focus-fore: ${
                    color.dark.orange.focus.fore.startsWith("--")
                      ? `var(${color.dark.orange.focus.fore});`
                      : `${color.dark.orange.focus.fore};`
                  }`
                );
              }
              if (color.dark.orange.focus.back) {
                nextDarkSchemeStyles.push(
                  `--color-orange-focus-back: ${
                    color.dark.orange.focus.back.startsWith("--")
                      ? `var(${color.dark.orange.focus.back});`
                      : `${color.dark.orange.focus.back};`
                  }`
                );
              }
              if (color.dark.orange.focus.border) {
                nextDarkSchemeStyles.push(
                  `--color-orange-focus-border: ${
                    color.dark.orange.focus.border.startsWith("--")
                      ? `var(${color.dark.orange.focus.border});`
                      : `${color.dark.orange.focus.border};`
                  }`
                );
              }
              if (color.dark.orange.focus.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-orange-focus-back: ${
                    color.dark.orange.focus.shadow.startsWith("--")
                      ? `var(${color.dark.orange.focus.shadow});`
                      : `${color.dark.orange.focus.shadow};`
                  }`
                );
              }
            }
            if (color.dark.orange.active) {
              if (color.dark.orange.active.fore) {
                nextDarkSchemeStyles.push(
                  `--color-orange-active-fore: ${
                    color.dark.orange.active.fore.startsWith("--")
                      ? `var(${color.dark.orange.active.fore});`
                      : `${color.dark.orange.active.fore};`
                  }`
                );
              }
              if (color.dark.orange.active.back) {
                nextDarkSchemeStyles.push(
                  `--color-orange-active-back: ${
                    color.dark.orange.active.back.startsWith("--")
                      ? `var(${color.dark.orange.active.back});`
                      : `${color.dark.orange.active.back};`
                  }`
                );
              }
              if (color.dark.orange.active.border) {
                nextDarkSchemeStyles.push(
                  `--color-orange-active-border: ${
                    color.dark.orange.active.border.startsWith("--")
                      ? `var(${color.dark.orange.active.border});`
                      : `${color.dark.orange.active.border};`
                  }`
                );
              }
              if (color.dark.orange.active.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-orange-active-back: ${
                    color.dark.orange.active.shadow.startsWith("--")
                      ? `var(${color.dark.orange.active.shadow});`
                      : `${color.dark.orange.active.shadow};`
                  }`
                );
              }
            }
          }
          if (color.dark.yellow) {
            if (color.dark.yellow.default) {
              if (color.dark.yellow.default.fore) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-fore: ${
                    color.dark.yellow.default.fore.startsWith("--")
                      ? `var(${color.dark.yellow.default.fore});`
                      : `${color.dark.yellow.default.fore};`
                  }`
                );
              }
              if (color.dark.yellow.default.back) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-back: ${
                    color.dark.yellow.default.back.startsWith("--")
                      ? `var(${color.dark.yellow.default.back});`
                      : `${color.dark.yellow.default.back};`
                  }`
                );
              }
              if (color.dark.yellow.default.border) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-border: ${
                    color.dark.yellow.default.border.startsWith("--")
                      ? `var(${color.dark.yellow.default.border});`
                      : `${color.dark.yellow.default.border};`
                  }`
                );
              }
              if (color.dark.yellow.default.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-back: ${
                    color.dark.yellow.default.shadow.startsWith("--")
                      ? `var(${color.dark.yellow.default.shadow});`
                      : `${color.dark.yellow.default.shadow};`
                  }`
                );
              }
            }
            if (color.dark.yellow.disabled) {
              if (color.dark.yellow.disabled.fore) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-disabled-fore: ${
                    color.dark.yellow.disabled.fore.startsWith("--")
                      ? `var(${color.dark.yellow.disabled.fore});`
                      : `${color.dark.yellow.disabled.fore};`
                  }`
                );
              }
              if (color.dark.yellow.disabled.back) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-disabled-back: ${
                    color.dark.yellow.disabled.back.startsWith("--")
                      ? `var(${color.dark.yellow.disabled.back});`
                      : `${color.dark.yellow.disabled.back};`
                  }`
                );
              }
              if (color.dark.yellow.disabled.border) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-disabled-border: ${
                    color.dark.yellow.disabled.border.startsWith("--")
                      ? `var(${color.dark.yellow.disabled.border});`
                      : `${color.dark.yellow.disabled.border};`
                  }`
                );
              }
              if (color.dark.yellow.disabled.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-disabled-back: ${
                    color.dark.yellow.disabled.shadow.startsWith("--")
                      ? `var(${color.dark.yellow.disabled.shadow});`
                      : `${color.dark.yellow.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.dark.yellow.hover) {
              if (color.dark.yellow.hover.fore) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-hover-fore: ${
                    color.dark.yellow.hover.fore.startsWith("--")
                      ? `var(${color.dark.yellow.hover.fore});`
                      : `${color.dark.yellow.hover.fore};`
                  }`
                );
              }
              if (color.dark.yellow.hover.back) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-hover-back: ${
                    color.dark.yellow.hover.back.startsWith("--")
                      ? `var(${color.dark.yellow.hover.back});`
                      : `${color.dark.yellow.hover.back};`
                  }`
                );
              }
              if (color.dark.yellow.hover.border) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-hover-border: ${
                    color.dark.yellow.hover.border.startsWith("--")
                      ? `var(${color.dark.yellow.hover.border});`
                      : `${color.dark.yellow.hover.border};`
                  }`
                );
              }
              if (color.dark.yellow.hover.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-hover-back: ${
                    color.dark.yellow.hover.shadow.startsWith("--")
                      ? `var(${color.dark.yellow.hover.shadow});`
                      : `${color.dark.yellow.hover.shadow};`
                  }`
                );
              }
            }
            if (color.dark.yellow.focus) {
              if (color.dark.yellow.focus.fore) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-focus-fore: ${
                    color.dark.yellow.focus.fore.startsWith("--")
                      ? `var(${color.dark.yellow.focus.fore});`
                      : `${color.dark.yellow.focus.fore};`
                  }`
                );
              }
              if (color.dark.yellow.focus.back) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-focus-back: ${
                    color.dark.yellow.focus.back.startsWith("--")
                      ? `var(${color.dark.yellow.focus.back});`
                      : `${color.dark.yellow.focus.back};`
                  }`
                );
              }
              if (color.dark.yellow.focus.border) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-focus-border: ${
                    color.dark.yellow.focus.border.startsWith("--")
                      ? `var(${color.dark.yellow.focus.border});`
                      : `${color.dark.yellow.focus.border};`
                  }`
                );
              }
              if (color.dark.yellow.focus.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-focus-back: ${
                    color.dark.yellow.focus.shadow.startsWith("--")
                      ? `var(${color.dark.yellow.focus.shadow});`
                      : `${color.dark.yellow.focus.shadow};`
                  }`
                );
              }
            }
            if (color.dark.yellow.active) {
              if (color.dark.yellow.active.fore) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-active-fore: ${
                    color.dark.yellow.active.fore.startsWith("--")
                      ? `var(${color.dark.yellow.active.fore});`
                      : `${color.dark.yellow.active.fore};`
                  }`
                );
              }
              if (color.dark.yellow.active.back) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-active-back: ${
                    color.dark.yellow.active.back.startsWith("--")
                      ? `var(${color.dark.yellow.active.back});`
                      : `${color.dark.yellow.active.back};`
                  }`
                );
              }
              if (color.dark.yellow.active.border) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-active-border: ${
                    color.dark.yellow.active.border.startsWith("--")
                      ? `var(${color.dark.yellow.active.border});`
                      : `${color.dark.yellow.active.border};`
                  }`
                );
              }
              if (color.dark.yellow.active.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-yellow-active-back: ${
                    color.dark.yellow.active.shadow.startsWith("--")
                      ? `var(${color.dark.yellow.active.shadow});`
                      : `${color.dark.yellow.active.shadow};`
                  }`
                );
              }
            }
          }
          if (color.dark.green) {
            if (color.dark.green.default) {
              if (color.dark.green.default.fore) {
                nextDarkSchemeStyles.push(
                  `--color-green-fore: ${
                    color.dark.green.default.fore.startsWith("--")
                      ? `var(${color.dark.green.default.fore});`
                      : `${color.dark.green.default.fore};`
                  }`
                );
              }
              if (color.dark.green.default.back) {
                nextDarkSchemeStyles.push(
                  `--color-green-back: ${
                    color.dark.green.default.back.startsWith("--")
                      ? `var(${color.dark.green.default.back});`
                      : `${color.dark.green.default.back};`
                  }`
                );
              }
              if (color.dark.green.default.border) {
                nextDarkSchemeStyles.push(
                  `--color-green-border: ${
                    color.dark.green.default.border.startsWith("--")
                      ? `var(${color.dark.green.default.border});`
                      : `${color.dark.green.default.border};`
                  }`
                );
              }
              if (color.dark.green.default.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-green-back: ${
                    color.dark.green.default.shadow.startsWith("--")
                      ? `var(${color.dark.green.default.shadow});`
                      : `${color.dark.green.default.shadow};`
                  }`
                );
              }
            }
            if (color.dark.green.disabled) {
              if (color.dark.green.disabled.fore) {
                nextDarkSchemeStyles.push(
                  `--color-green-disabled-fore: ${
                    color.dark.green.disabled.fore.startsWith("--")
                      ? `var(${color.dark.green.disabled.fore});`
                      : `${color.dark.green.disabled.fore};`
                  }`
                );
              }
              if (color.dark.green.disabled.back) {
                nextDarkSchemeStyles.push(
                  `--color-green-disabled-back: ${
                    color.dark.green.disabled.back.startsWith("--")
                      ? `var(${color.dark.green.disabled.back});`
                      : `${color.dark.green.disabled.back};`
                  }`
                );
              }
              if (color.dark.green.disabled.border) {
                nextDarkSchemeStyles.push(
                  `--color-green-disabled-border: ${
                    color.dark.green.disabled.border.startsWith("--")
                      ? `var(${color.dark.green.disabled.border});`
                      : `${color.dark.green.disabled.border};`
                  }`
                );
              }
              if (color.dark.green.disabled.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-green-disabled-back: ${
                    color.dark.green.disabled.shadow.startsWith("--")
                      ? `var(${color.dark.green.disabled.shadow});`
                      : `${color.dark.green.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.dark.green.hover) {
              if (color.dark.green.hover.fore) {
                nextDarkSchemeStyles.push(
                  `--color-green-hover-fore: ${
                    color.dark.green.hover.fore.startsWith("--")
                      ? `var(${color.dark.green.hover.fore});`
                      : `${color.dark.green.hover.fore};`
                  }`
                );
              }
              if (color.dark.green.hover.back) {
                nextDarkSchemeStyles.push(
                  `--color-green-hover-back: ${
                    color.dark.green.hover.back.startsWith("--")
                      ? `var(${color.dark.green.hover.back});`
                      : `${color.dark.green.hover.back};`
                  }`
                );
              }
              if (color.dark.green.hover.border) {
                nextDarkSchemeStyles.push(
                  `--color-green-hover-border: ${
                    color.dark.green.hover.border.startsWith("--")
                      ? `var(${color.dark.green.hover.border});`
                      : `${color.dark.green.hover.border};`
                  }`
                );
              }
              if (color.dark.green.hover.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-green-hover-back: ${
                    color.dark.green.hover.shadow.startsWith("--")
                      ? `var(${color.dark.green.hover.shadow});`
                      : `${color.dark.green.hover.shadow};`
                  }`
                );
              }
            }
            if (color.dark.green.focus) {
              if (color.dark.green.focus.fore) {
                nextDarkSchemeStyles.push(
                  `--color-green-focus-fore: ${
                    color.dark.green.focus.fore.startsWith("--")
                      ? `var(${color.dark.green.focus.fore});`
                      : `${color.dark.green.focus.fore};`
                  }`
                );
              }
              if (color.dark.green.focus.back) {
                nextDarkSchemeStyles.push(
                  `--color-green-focus-back: ${
                    color.dark.green.focus.back.startsWith("--")
                      ? `var(${color.dark.green.focus.back});`
                      : `${color.dark.green.focus.back};`
                  }`
                );
              }
              if (color.dark.green.focus.border) {
                nextDarkSchemeStyles.push(
                  `--color-green-focus-border: ${
                    color.dark.green.focus.border.startsWith("--")
                      ? `var(${color.dark.green.focus.border});`
                      : `${color.dark.green.focus.border};`
                  }`
                );
              }
              if (color.dark.green.focus.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-green-focus-back: ${
                    color.dark.green.focus.shadow.startsWith("--")
                      ? `var(${color.dark.green.focus.shadow});`
                      : `${color.dark.green.focus.shadow};`
                  }`
                );
              }
            }
            if (color.dark.green.active) {
              if (color.dark.green.active.fore) {
                nextDarkSchemeStyles.push(
                  `--color-green-active-fore: ${
                    color.dark.green.active.fore.startsWith("--")
                      ? `var(${color.dark.green.active.fore});`
                      : `${color.dark.green.active.fore};`
                  }`
                );
              }
              if (color.dark.green.active.back) {
                nextDarkSchemeStyles.push(
                  `--color-green-active-back: ${
                    color.dark.green.active.back.startsWith("--")
                      ? `var(${color.dark.green.active.back});`
                      : `${color.dark.green.active.back};`
                  }`
                );
              }
              if (color.dark.green.active.border) {
                nextDarkSchemeStyles.push(
                  `--color-green-active-border: ${
                    color.dark.green.active.border.startsWith("--")
                      ? `var(${color.dark.green.active.border});`
                      : `${color.dark.green.active.border};`
                  }`
                );
              }
              if (color.dark.green.active.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-green-active-back: ${
                    color.dark.green.active.shadow.startsWith("--")
                      ? `var(${color.dark.green.active.shadow});`
                      : `${color.dark.green.active.shadow};`
                  }`
                );
              }
            }
          }
          if (color.dark.cyan) {
            if (color.dark.cyan.default) {
              if (color.dark.cyan.default.fore) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-fore: ${
                    color.dark.cyan.default.fore.startsWith("--")
                      ? `var(${color.dark.cyan.default.fore});`
                      : `${color.dark.cyan.default.fore};`
                  }`
                );
              }
              if (color.dark.cyan.default.back) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-back: ${
                    color.dark.cyan.default.back.startsWith("--")
                      ? `var(${color.dark.cyan.default.back});`
                      : `${color.dark.cyan.default.back};`
                  }`
                );
              }
              if (color.dark.cyan.default.border) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-border: ${
                    color.dark.cyan.default.border.startsWith("--")
                      ? `var(${color.dark.cyan.default.border});`
                      : `${color.dark.cyan.default.border};`
                  }`
                );
              }
              if (color.dark.cyan.default.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-back: ${
                    color.dark.cyan.default.shadow.startsWith("--")
                      ? `var(${color.dark.cyan.default.shadow});`
                      : `${color.dark.cyan.default.shadow};`
                  }`
                );
              }
            }
            if (color.dark.cyan.disabled) {
              if (color.dark.cyan.disabled.fore) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-disabled-fore: ${
                    color.dark.cyan.disabled.fore.startsWith("--")
                      ? `var(${color.dark.cyan.disabled.fore});`
                      : `${color.dark.cyan.disabled.fore};`
                  }`
                );
              }
              if (color.dark.cyan.disabled.back) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-disabled-back: ${
                    color.dark.cyan.disabled.back.startsWith("--")
                      ? `var(${color.dark.cyan.disabled.back});`
                      : `${color.dark.cyan.disabled.back};`
                  }`
                );
              }
              if (color.dark.cyan.disabled.border) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-disabled-border: ${
                    color.dark.cyan.disabled.border.startsWith("--")
                      ? `var(${color.dark.cyan.disabled.border});`
                      : `${color.dark.cyan.disabled.border};`
                  }`
                );
              }
              if (color.dark.cyan.disabled.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-disabled-back: ${
                    color.dark.cyan.disabled.shadow.startsWith("--")
                      ? `var(${color.dark.cyan.disabled.shadow});`
                      : `${color.dark.cyan.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.dark.cyan.hover) {
              if (color.dark.cyan.hover.fore) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-hover-fore: ${
                    color.dark.cyan.hover.fore.startsWith("--")
                      ? `var(${color.dark.cyan.hover.fore});`
                      : `${color.dark.cyan.hover.fore};`
                  }`
                );
              }
              if (color.dark.cyan.hover.back) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-hover-back: ${
                    color.dark.cyan.hover.back.startsWith("--")
                      ? `var(${color.dark.cyan.hover.back});`
                      : `${color.dark.cyan.hover.back};`
                  }`
                );
              }
              if (color.dark.cyan.hover.border) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-hover-border: ${
                    color.dark.cyan.hover.border.startsWith("--")
                      ? `var(${color.dark.cyan.hover.border});`
                      : `${color.dark.cyan.hover.border};`
                  }`
                );
              }
              if (color.dark.cyan.hover.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-hover-back: ${
                    color.dark.cyan.hover.shadow.startsWith("--")
                      ? `var(${color.dark.cyan.hover.shadow});`
                      : `${color.dark.cyan.hover.shadow};`
                  }`
                );
              }
            }
            if (color.dark.cyan.focus) {
              if (color.dark.cyan.focus.fore) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-focus-fore: ${
                    color.dark.cyan.focus.fore.startsWith("--")
                      ? `var(${color.dark.cyan.focus.fore});`
                      : `${color.dark.cyan.focus.fore};`
                  }`
                );
              }
              if (color.dark.cyan.focus.back) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-focus-back: ${
                    color.dark.cyan.focus.back.startsWith("--")
                      ? `var(${color.dark.cyan.focus.back});`
                      : `${color.dark.cyan.focus.back};`
                  }`
                );
              }
              if (color.dark.cyan.focus.border) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-focus-border: ${
                    color.dark.cyan.focus.border.startsWith("--")
                      ? `var(${color.dark.cyan.focus.border});`
                      : `${color.dark.cyan.focus.border};`
                  }`
                );
              }
              if (color.dark.cyan.focus.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-focus-back: ${
                    color.dark.cyan.focus.shadow.startsWith("--")
                      ? `var(${color.dark.cyan.focus.shadow});`
                      : `${color.dark.cyan.focus.shadow};`
                  }`
                );
              }
            }
            if (color.dark.cyan.active) {
              if (color.dark.cyan.active.fore) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-active-fore: ${
                    color.dark.cyan.active.fore.startsWith("--")
                      ? `var(${color.dark.cyan.active.fore});`
                      : `${color.dark.cyan.active.fore};`
                  }`
                );
              }
              if (color.dark.cyan.active.back) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-active-back: ${
                    color.dark.cyan.active.back.startsWith("--")
                      ? `var(${color.dark.cyan.active.back});`
                      : `${color.dark.cyan.active.back};`
                  }`
                );
              }
              if (color.dark.cyan.active.border) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-active-border: ${
                    color.dark.cyan.active.border.startsWith("--")
                      ? `var(${color.dark.cyan.active.border});`
                      : `${color.dark.cyan.active.border};`
                  }`
                );
              }
              if (color.dark.cyan.active.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-cyan-active-back: ${
                    color.dark.cyan.active.shadow.startsWith("--")
                      ? `var(${color.dark.cyan.active.shadow});`
                      : `${color.dark.cyan.active.shadow};`
                  }`
                );
              }
            }
          }
          if (color.dark.blue) {
            if (color.dark.blue.default) {
              if (color.dark.blue.default.fore) {
                nextDarkSchemeStyles.push(
                  `--color-blue-fore: ${
                    color.dark.blue.default.fore.startsWith("--")
                      ? `var(${color.dark.blue.default.fore});`
                      : `${color.dark.blue.default.fore};`
                  }`
                );
              }
              if (color.dark.blue.default.back) {
                nextDarkSchemeStyles.push(
                  `--color-blue-back: ${
                    color.dark.blue.default.back.startsWith("--")
                      ? `var(${color.dark.blue.default.back});`
                      : `${color.dark.blue.default.back};`
                  }`
                );
              }
              if (color.dark.blue.default.border) {
                nextDarkSchemeStyles.push(
                  `--color-blue-border: ${
                    color.dark.blue.default.border.startsWith("--")
                      ? `var(${color.dark.blue.default.border});`
                      : `${color.dark.blue.default.border};`
                  }`
                );
              }
              if (color.dark.blue.default.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-blue-back: ${
                    color.dark.blue.default.shadow.startsWith("--")
                      ? `var(${color.dark.blue.default.shadow});`
                      : `${color.dark.blue.default.shadow};`
                  }`
                );
              }
            }
            if (color.dark.blue.disabled) {
              if (color.dark.blue.disabled.fore) {
                nextDarkSchemeStyles.push(
                  `--color-blue-disabled-fore: ${
                    color.dark.blue.disabled.fore.startsWith("--")
                      ? `var(${color.dark.blue.disabled.fore});`
                      : `${color.dark.blue.disabled.fore};`
                  }`
                );
              }
              if (color.dark.blue.disabled.back) {
                nextDarkSchemeStyles.push(
                  `--color-blue-disabled-back: ${
                    color.dark.blue.disabled.back.startsWith("--")
                      ? `var(${color.dark.blue.disabled.back});`
                      : `${color.dark.blue.disabled.back};`
                  }`
                );
              }
              if (color.dark.blue.disabled.border) {
                nextDarkSchemeStyles.push(
                  `--color-blue-disabled-border: ${
                    color.dark.blue.disabled.border.startsWith("--")
                      ? `var(${color.dark.blue.disabled.border});`
                      : `${color.dark.blue.disabled.border};`
                  }`
                );
              }
              if (color.dark.blue.disabled.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-blue-disabled-back: ${
                    color.dark.blue.disabled.shadow.startsWith("--")
                      ? `var(${color.dark.blue.disabled.shadow});`
                      : `${color.dark.blue.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.dark.blue.hover) {
              if (color.dark.blue.hover.fore) {
                nextDarkSchemeStyles.push(
                  `--color-blue-hover-fore: ${
                    color.dark.blue.hover.fore.startsWith("--")
                      ? `var(${color.dark.blue.hover.fore});`
                      : `${color.dark.blue.hover.fore};`
                  }`
                );
              }
              if (color.dark.blue.hover.back) {
                nextDarkSchemeStyles.push(
                  `--color-blue-hover-back: ${
                    color.dark.blue.hover.back.startsWith("--")
                      ? `var(${color.dark.blue.hover.back});`
                      : `${color.dark.blue.hover.back};`
                  }`
                );
              }
              if (color.dark.blue.hover.border) {
                nextDarkSchemeStyles.push(
                  `--color-blue-hover-border: ${
                    color.dark.blue.hover.border.startsWith("--")
                      ? `var(${color.dark.blue.hover.border});`
                      : `${color.dark.blue.hover.border};`
                  }`
                );
              }
              if (color.dark.blue.hover.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-blue-hover-back: ${
                    color.dark.blue.hover.shadow.startsWith("--")
                      ? `var(${color.dark.blue.hover.shadow});`
                      : `${color.dark.blue.hover.shadow};`
                  }`
                );
              }
            }
            if (color.dark.blue.focus) {
              if (color.dark.blue.focus.fore) {
                nextDarkSchemeStyles.push(
                  `--color-blue-focus-fore: ${
                    color.dark.blue.focus.fore.startsWith("--")
                      ? `var(${color.dark.blue.focus.fore});`
                      : `${color.dark.blue.focus.fore};`
                  }`
                );
              }
              if (color.dark.blue.focus.back) {
                nextDarkSchemeStyles.push(
                  `--color-blue-focus-back: ${
                    color.dark.blue.focus.back.startsWith("--")
                      ? `var(${color.dark.blue.focus.back});`
                      : `${color.dark.blue.focus.back};`
                  }`
                );
              }
              if (color.dark.blue.focus.border) {
                nextDarkSchemeStyles.push(
                  `--color-blue-focus-border: ${
                    color.dark.blue.focus.border.startsWith("--")
                      ? `var(${color.dark.blue.focus.border});`
                      : `${color.dark.blue.focus.border};`
                  }`
                );
              }
              if (color.dark.blue.focus.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-blue-focus-back: ${
                    color.dark.blue.focus.shadow.startsWith("--")
                      ? `var(${color.dark.blue.focus.shadow});`
                      : `${color.dark.blue.focus.shadow};`
                  }`
                );
              }
            }
            if (color.dark.blue.active) {
              if (color.dark.blue.active.fore) {
                nextDarkSchemeStyles.push(
                  `--color-blue-active-fore: ${
                    color.dark.blue.active.fore.startsWith("--")
                      ? `var(${color.dark.blue.active.fore});`
                      : `${color.dark.blue.active.fore};`
                  }`
                );
              }
              if (color.dark.blue.active.back) {
                nextDarkSchemeStyles.push(
                  `--color-blue-active-back: ${
                    color.dark.blue.active.back.startsWith("--")
                      ? `var(${color.dark.blue.active.back});`
                      : `${color.dark.blue.active.back};`
                  }`
                );
              }
              if (color.dark.blue.active.border) {
                nextDarkSchemeStyles.push(
                  `--color-blue-active-border: ${
                    color.dark.blue.active.border.startsWith("--")
                      ? `var(${color.dark.blue.active.border});`
                      : `${color.dark.blue.active.border};`
                  }`
                );
              }
              if (color.dark.blue.active.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-blue-active-back: ${
                    color.dark.blue.active.shadow.startsWith("--")
                      ? `var(${color.dark.blue.active.shadow});`
                      : `${color.dark.blue.active.shadow};`
                  }`
                );
              }
            }
          }
          if (color.dark.violet) {
            if (color.dark.violet.default) {
              if (color.dark.violet.default.fore) {
                nextDarkSchemeStyles.push(
                  `--color-violet-fore: ${
                    color.dark.violet.default.fore.startsWith("--")
                      ? `var(${color.dark.violet.default.fore});`
                      : `${color.dark.violet.default.fore};`
                  }`
                );
              }
              if (color.dark.violet.default.back) {
                nextDarkSchemeStyles.push(
                  `--color-violet-back: ${
                    color.dark.violet.default.back.startsWith("--")
                      ? `var(${color.dark.violet.default.back});`
                      : `${color.dark.violet.default.back};`
                  }`
                );
              }
              if (color.dark.violet.default.border) {
                nextDarkSchemeStyles.push(
                  `--color-violet-border: ${
                    color.dark.violet.default.border.startsWith("--")
                      ? `var(${color.dark.violet.default.border});`
                      : `${color.dark.violet.default.border};`
                  }`
                );
              }
              if (color.dark.violet.default.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-violet-back: ${
                    color.dark.violet.default.shadow.startsWith("--")
                      ? `var(${color.dark.violet.default.shadow});`
                      : `${color.dark.violet.default.shadow};`
                  }`
                );
              }
            }
            if (color.dark.violet.disabled) {
              if (color.dark.violet.disabled.fore) {
                nextDarkSchemeStyles.push(
                  `--color-violet-disabled-fore: ${
                    color.dark.violet.disabled.fore.startsWith("--")
                      ? `var(${color.dark.violet.disabled.fore});`
                      : `${color.dark.violet.disabled.fore};`
                  }`
                );
              }
              if (color.dark.violet.disabled.back) {
                nextDarkSchemeStyles.push(
                  `--color-violet-disabled-back: ${
                    color.dark.violet.disabled.back.startsWith("--")
                      ? `var(${color.dark.violet.disabled.back});`
                      : `${color.dark.violet.disabled.back};`
                  }`
                );
              }
              if (color.dark.violet.disabled.border) {
                nextDarkSchemeStyles.push(
                  `--color-violet-disabled-border: ${
                    color.dark.violet.disabled.border.startsWith("--")
                      ? `var(${color.dark.violet.disabled.border});`
                      : `${color.dark.violet.disabled.border};`
                  }`
                );
              }
              if (color.dark.violet.disabled.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-violet-disabled-back: ${
                    color.dark.violet.disabled.shadow.startsWith("--")
                      ? `var(${color.dark.violet.disabled.shadow});`
                      : `${color.dark.violet.disabled.shadow};`
                  }`
                );
              }
            }
            if (color.dark.violet.hover) {
              if (color.dark.violet.hover.fore) {
                nextDarkSchemeStyles.push(
                  `--color-violet-hover-fore: ${
                    color.dark.violet.hover.fore.startsWith("--")
                      ? `var(${color.dark.violet.hover.fore});`
                      : `${color.dark.violet.hover.fore};`
                  }`
                );
              }
              if (color.dark.violet.hover.back) {
                nextDarkSchemeStyles.push(
                  `--color-violet-hover-back: ${
                    color.dark.violet.hover.back.startsWith("--")
                      ? `var(${color.dark.violet.hover.back});`
                      : `${color.dark.violet.hover.back};`
                  }`
                );
              }
              if (color.dark.violet.hover.border) {
                nextDarkSchemeStyles.push(
                  `--color-violet-hover-border: ${
                    color.dark.violet.hover.border.startsWith("--")
                      ? `var(${color.dark.violet.hover.border});`
                      : `${color.dark.violet.hover.border};`
                  }`
                );
              }
              if (color.dark.violet.hover.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-violet-hover-back: ${
                    color.dark.violet.hover.shadow.startsWith("--")
                      ? `var(${color.dark.violet.hover.shadow});`
                      : `${color.dark.violet.hover.shadow};`
                  }`
                );
              }
            }
            if (color.dark.violet.focus) {
              if (color.dark.violet.focus.fore) {
                nextDarkSchemeStyles.push(
                  `--color-violet-focus-fore: ${
                    color.dark.violet.focus.fore.startsWith("--")
                      ? `var(${color.dark.violet.focus.fore});`
                      : `${color.dark.violet.focus.fore};`
                  }`
                );
              }
              if (color.dark.violet.focus.back) {
                nextDarkSchemeStyles.push(
                  `--color-violet-focus-back: ${
                    color.dark.violet.focus.back.startsWith("--")
                      ? `var(${color.dark.violet.focus.back});`
                      : `${color.dark.violet.focus.back};`
                  }`
                );
              }
              if (color.dark.violet.focus.border) {
                nextDarkSchemeStyles.push(
                  `--color-violet-focus-border: ${
                    color.dark.violet.focus.border.startsWith("--")
                      ? `var(${color.dark.violet.focus.border});`
                      : `${color.dark.violet.focus.border};`
                  }`
                );
              }
              if (color.dark.violet.focus.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-violet-focus-back: ${
                    color.dark.violet.focus.shadow.startsWith("--")
                      ? `var(${color.dark.violet.focus.shadow});`
                      : `${color.dark.violet.focus.shadow};`
                  }`
                );
              }
            }
            if (color.dark.violet.active) {
              if (color.dark.violet.active.fore) {
                nextDarkSchemeStyles.push(
                  `--color-violet-active-fore: ${
                    color.dark.violet.active.fore.startsWith("--")
                      ? `var(${color.dark.violet.active.fore});`
                      : `${color.dark.violet.active.fore};`
                  }`
                );
              }
              if (color.dark.violet.active.back) {
                nextDarkSchemeStyles.push(
                  `--color-violet-active-back: ${
                    color.dark.violet.active.back.startsWith("--")
                      ? `var(${color.dark.violet.active.back});`
                      : `${color.dark.violet.active.back};`
                  }`
                );
              }
              if (color.dark.violet.active.border) {
                nextDarkSchemeStyles.push(
                  `--color-violet-active-border: ${
                    color.dark.violet.active.border.startsWith("--")
                      ? `var(${color.dark.violet.active.border});`
                      : `${color.dark.violet.active.border};`
                  }`
                );
              }
              if (color.dark.violet.active.shadow) {
                nextDarkSchemeStyles.push(
                  `--color-violet-active-back: ${
                    color.dark.violet.active.shadow.startsWith("--")
                      ? `var(${color.dark.violet.active.shadow});`
                      : `${color.dark.violet.active.shadow};`
                  }`
                );
              }
            }
          }
        }
      }
    }
    setDarkSchemeStyles(nextDarkSchemeStyles);
  }, [props.cssVariableSetting])
  
  const customStyle: string[] = [];
  rootStyles.length > 0 && customStyle.push(`:root{${rootStyles.join("")}}`);
  lightSchemeStyles.length > 0 && customStyle.push(`:root{${lightSchemeStyles.join("")}}`);
  lightSchemeStyles.length > 0 && customStyle.push(`[data-color-scheme="light"]{${lightSchemeStyles.join("")}}`);
  darkSchemeStyles.length > 0 && customStyle.push(`[data-color-scheme="dark"]{${darkSchemeStyles.join("")}}`);

  return (
    <>
      {customStyle.length > 0 && <style suppressHydrationWarning={true}>{customStyle}</style>}
      <Tabula colorScheme={props.colorScheme}>{props.children}</Tabula>
    </>
  );
}
