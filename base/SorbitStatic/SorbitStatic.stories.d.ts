import { StoryObj } from '@storybook/react';
import { default as SorbitStatic } from './SorbitStatic';

declare const meta: {
    title: string;
    component: typeof SorbitStatic;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LightTheme: Story;
export declare const DarkTheme: Story;
//# sourceMappingURL=SorbitStatic.stories.d.ts.map