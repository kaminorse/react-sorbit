import { default as SorbitCssVariable } from '../../common/models/SorbitCssVariable';

declare function getSorbitCssVariableStyles(cssVariableSetting?: SorbitCssVariable): string[];
declare function getRootStyles(cssVariableSetting?: SorbitCssVariable): string[];
declare function getLightSchemeStyles(cssVariableSetting?: SorbitCssVariable): string[];
declare function getDarkSchemeStyles(cssVariableSetting?: SorbitCssVariable): string[];
declare const sorbitStyleUtility: {
    getSorbitCssVariableStyles: typeof getSorbitCssVariableStyles;
    getRootStyles: typeof getRootStyles;
    getLightSchemeStyles: typeof getLightSchemeStyles;
    getDarkSchemeStyles: typeof getDarkSchemeStyles;
};
export default sorbitStyleUtility;
//# sourceMappingURL=sorbitStyleUtility.d.ts.map