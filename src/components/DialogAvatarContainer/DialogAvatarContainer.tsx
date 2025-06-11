import { useMemo } from "react";
import classNameUtility from "../../utilities/classNameUtility";
import emotionCssUtility from "../../utilities/emotionCssUtility";
import classNames from "./DialogAvatarContainer.module.scss";
import DialogAvatarContainerProps from "./DialogAvatarContainerProps";

export default function DialogAvatarContainer(
  props: DialogAvatarContainerProps
): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["as"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["dialog-avatar-container"]];

  const utilityClassNames = useMemo(() => {
    return classNameUtility.getUtilityClassNames({
      fore: props.fore,
      back: props.back,
      border: props.border,
      highlighter: props.highlighter,
      spacing: props.spacing,
    });
  }, [props.fore, props.back, props.border, props.highlighter, props.spacing]);
  assignedClassNames.push(...utilityClassNames);

  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const css = useMemo(() => {
    return emotionCssUtility.getEmotionCss({
      fore: props.fore,
      back: props.back,
      border: props.border,
      highlighter: props.highlighter,
      spacing: props.spacing,
      css: props.css,
    });
  }, [
    props.fore,
    props.back,
    props.border,
    props.highlighter,
    props.spacing,
    props.css,
  ]);

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
