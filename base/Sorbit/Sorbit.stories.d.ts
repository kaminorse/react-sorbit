import { StoryObj } from '@storybook/react';
import { default as Sorbit } from './Sorbit';

declare const meta: {
    title: string;
    component: typeof Sorbit;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LightTheme: Story;
export declare const DarkTheme: Story;
//# sourceMappingURL=Sorbit.stories.d.ts.map