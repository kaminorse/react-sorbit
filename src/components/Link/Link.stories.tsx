import type { Meta, StoryObj } from "@storybook/react";

import Link from "./Link";
import { SorbitStatic } from "../../base/SorbitStatic";

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
    <SorbitStatic>
      <Link {...props}>
        {"Link"}
      </Link>
    </SorbitStatic>
  ),
};
