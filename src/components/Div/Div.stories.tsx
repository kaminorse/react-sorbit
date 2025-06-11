import type { Meta, StoryObj } from "@storybook/react-vite";

import Div from "./Div";
import Sorbit from "../../base/Sorbit";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Div",
  component: Div,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Div>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
  },
  render: (props) => (
    <Sorbit>
      <Div {...props}>
        <span>{"Plain"}</span>
      </Div>
    </Sorbit>
  ),
};
