import type { Meta, StoryObj } from "@storybook/react";

import Stripe from "./Stripe";
import SorbitStatic from "../../base/SorbitStatic";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Backgrounds/Stripe",
  component: Stripe,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Stripe>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    patternColor: {
      name: "blue",
      lightness: 600,
    },
  },
  render: (props) => (
    <SorbitStatic>
      <Stripe {...props} style={{ width: "100%", height: "600px" }}>
        <span>{"Plain"}</span>
      </Stripe>
    </SorbitStatic>
  ),
};
