import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import SorbitStatic from "../../base/SorbitStatic";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    colorName: undefined,
  },
  render: (props) => (
    <SorbitStatic>
      <Card {...props}>
        <CardTitle>{"Title"}</CardTitle>
        <CardBody>{"Body"}</CardBody>
      </Card>
    </SorbitStatic>
  ),
};
