import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";
import { SorbitStatic } from "../../base/SorbitStatic";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
  },
  render: (props) => (
    <SorbitStatic>
      <Header {...props}>
        {"Header"}
      </Header>
    </SorbitStatic>
  ),
};
