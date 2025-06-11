import type { Meta, StoryObj } from "@storybook/react-vite";

import Stripe from "./Stripe";
import Sorbit from "../../base/Sorbit";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Backgrounds/Stripe",
  component: Stripe,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Stripe>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    patternColor: {
      name: "gray",
      lightness: 500
    }
  },
  render: (props) => (
    <Sorbit>
      <Stripe {...props} style={{ aspectRatio: "16/9", width: "100%" }}>
        <span>{"Plain"}</span>
      </Stripe>
    </Sorbit>
  ),
};
