import classNameUtility from "../../utilities/classNameUtility";
import emotionCssUtility from "../../utilities/emotionCssUtility";
import AdminProps from "./AdminProps";
import classNames from "./Admin.module.scss";
import { useMemo } from "react";

export default function Admin(props: AdminProps) {
  const assignedProps = { ...props };
  delete assignedProps["as"];
  delete assignedProps["isSidebarCollapse"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  delete assignedProps["css"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["admin"]];

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

  const sidebarCollapse = props.isSidebarCollapse ? "collapse" : "";

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
      data-sorbit-admin-sidebar={sidebarCollapse}
      css={css}
    />
  ) : (
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      data-sorbit-admin-sidebar={sidebarCollapse}
      css={css}
    />
  );
}
