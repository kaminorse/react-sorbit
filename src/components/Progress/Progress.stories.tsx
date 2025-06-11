import type { Meta, StoryObj } from "@storybook/react-vite";

import Progress from "./Progress";
import Sorbit from "../../base/Sorbit";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    colorName: undefined,
    percentage: 50,
  },
  render: (props) => (
    <Sorbit>
      <Progress {...props} />
    </Sorbit>
  ),
};
