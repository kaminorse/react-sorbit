import { default as React } from '../../../node_modules/react';
import { ColorLightness, ColorName } from '../../common/literalTypes';
import { BaseComponentProps } from '../../common/models';
export default interface StripeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, BaseComponentProps {
    as?: React.ElementType | undefined;
    [key: string]: any;
    patternColor?: {
        name: ColorName;
        lightness: ColorLightness;
    } | undefined;
    degree?: 0 | 45 | 90 | 135 | 180;
}
//# sourceMappingURL=StripeProps.d.ts.map