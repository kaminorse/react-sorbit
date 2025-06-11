import { BaseComponentProps } from '../../common/models';
import { Interpolation, Theme } from '@emotion/react';
import { ColorAttributes } from '../../react-sorbit';
declare function getColorVariable(colorAttributes?: ColorAttributes): string | undefined;
declare function getEmotionCss(props: BaseComponentProps): Interpolation<Theme>;
declare const emotionStyleUtility: {
    getColorVariable: typeof getColorVariable;
    getEmotionCss: typeof getEmotionCss;
};
export default emotionStyleUtility;
//# sourceMappingURL=emotionCssUtility.d.ts.map