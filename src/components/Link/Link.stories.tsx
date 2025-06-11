import type { Meta, StoryObj } from "@storybook/react-vite";

import Link from "./Link";
import Sorbit from "../../base/Sorbit";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    as: "a"
  },
  render: (props) => (
    <Sorbit>
      <Link {...props}>
        {"Link"}
      </Link>
    </Sorbit>
  ),
};
