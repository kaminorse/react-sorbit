import type { Meta, StoryObj } from "@storybook/react";

import Centering from "./Centering";
import { SorbitStatic } from "../../base/SorbitStatic";
import { Div } from "../../components/Div";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Layouts/Centering",
  component: Centering,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Centering>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
  },
  render: (props) => (
    <SorbitStatic>
      <Centering {...props}>
        <Div>{"Centering"}</Div>
      </Centering>
    </SorbitStatic>
  ),
};
