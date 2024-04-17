import type { Meta, StoryObj } from "@storybook/react";

import Label from "./Label";
import SorbitStatic from "../../base/SorbitStatic";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <SorbitStatic>
      <Label {...props}>{"Plain"}</Label>
    </SorbitStatic>
  ),
};
