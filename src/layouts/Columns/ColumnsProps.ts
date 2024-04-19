import BaseComponentProps from "@/common/models/BaseComponentProps";

export default interface ColumnsProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    BaseComponentProps {
  isDirectionRow?: boolean | undefined;
  isDirectionRowReverse?: boolean | undefined;
  isDirectionColumn?: boolean | undefined;
  isDirectionColumnReverse?: boolean | undefined;
  isMobileDirectionRow?: boolean | undefined;
  isMobileOrMoreDirectionRow?: boolean | undefined;
  isTabletOrLessDirectionRow?: boolean | undefined;
  isTabletDirectionRow?: boolean | undefined;
  isTabletOrMoreDirectionRow?: boolean | undefined;
  isDesktopOrLessDirectionRow?: boolean | undefined;
  isDesktopDirectionRow?: boolean | undefined;
  isDesktopOrMoreDirectionRow?: boolean | undefined;
  isWidescreenOrLessDirectionRow?: boolean | undefined;
  isWidescreenDirectionRow?: boolean | undefined;
  isWidescreenOrMoreDirectionRow?: boolean | undefined;
  isFullhdOrLessDirectionRow?: boolean | undefined;
  isFullhdDirectionRow?: boolean | undefined;
  isMobileDirectionRowReverse?: boolean | undefined;
  isMobileOrMoreDirectionRowReverse?: boolean | undefined;
  isTabletOrLessDirectionRowReverse?: boolean | undefined;
  isTabletDirectionRowReverse?: boolean | undefined;
  isTabletOrMoreDirectionRowReverse?: boolean | undefined;
  isDesktopOrLessDirectionRowReverse?: boolean | undefined;
  isDesktopDirectionRowReverse?: boolean | undefined;
  isDesktopOrMoreDirectionRowReverse?: boolean | undefined;
  isWidescreenOrLessDirectionRowReverse?: boolean | undefined;
  isWidescreenDirectionRowReverse?: boolean | undefined;
  isWidescreenOrMoreDirectionRowReverse?: boolean | undefined;
  isFullhdOrLessDirectionRowReverse?: boolean | undefined;
  isFullhdDirectionRowReverse?: boolean | undefined;
  isMobileDirectionColumn?: boolean | undefined;
  isMobileOrMoreDirectionColumn?: boolean | undefined;
  isTabletOrLessDirectionColumn?: boolean | undefined;
  isTabletDirectionColumn?: boolean | undefined;
  isTabletOrMoreDirectionColumn?: boolean | undefined;
  isDesktopOrLessDirectionColumn?: boolean | undefined;
  isDesktopDirectionColumn?: boolean | undefined;
  isDesktopOrMoreDirectionColumn?: boolean | undefined;
  isWidescreenOrLessDirectionColumn?: boolean | undefined;
  isWidescreenDirectionColumn?: boolean | undefined;
  isWidescreenOrMoreDirectionColumn?: boolean | undefined;
  isFullhdOrLessDirectionColumn?: boolean | undefined;
  isFullhdDirectionColumn?: boolean | undefined;
  isMobileDirectionColumnReverse?: boolean | undefined;
  isMobileOrMoreDirectionColumnReverse?: boolean | undefined;
  isTabletOrLessDirectionColumnReverse?: boolean | undefined;
  isTabletDirectionColumnReverse?: boolean | undefined;
  isTabletOrMoreDirectionColumnReverse?: boolean | undefined;
  isDesktopOrLessDirectionColumnReverse?: boolean | undefined;
  isDesktopDirectionColumnReverse?: boolean | undefined;
  isDesktopOrMoreDirectionColumnReverse?: boolean | undefined;
  isWidescreenOrLessDirectionColumnReverse?: boolean | undefined;
  isWidescreenDirectionColumnReverse?: boolean | undefined;
  isWidescreenOrMoreDirectionColumnReverse?: boolean | undefined;
  isFullhdOrLessDirectionColumnReverse?: boolean | undefined;
  isFullhdDirectionColumnReverse?: boolean | undefined;
}
