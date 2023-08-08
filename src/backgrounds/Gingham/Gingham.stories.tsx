import type { Meta, StoryObj } from "@storybook/react";

import Gingham from "./Gingham";
import Sorbit from "../../base/Sorbit";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Backgrounds/Gingham",
  component: Gingham,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Gingham>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    patternColor: {
      name: "blue",
      lightness: 600,
    }
  },
  render: (props) => (
    <Sorbit>
      <Gingham {...props} style={{ width: "100%", height: "600px" }}>
        <span>{"Plain"}</span>
      </Gingham>
    </Sorbit>
  ),
};
