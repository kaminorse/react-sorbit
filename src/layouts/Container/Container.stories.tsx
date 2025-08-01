import type { Meta, StoryObj } from "@storybook/react-vite";

import Container from "./Container";
import Sorbit from "../../base/Sorbit";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Layouts/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
  },
  render: (props) => (
    <Sorbit>
      <Container {...props} />
    </Sorbit>
  ),
};
