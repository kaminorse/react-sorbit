import type { Meta, StoryObj } from "@storybook/react";

import Section from "./Section";
import { SorbitStatic } from "../../base/SorbitStatic";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Section",
  component: Section,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
  },
  render: (props) => (
    <SorbitStatic>
      <Section {...props}>
        <Section>{"Plain"}</Section>
      </Section>
    </SorbitStatic>
  ),
};
