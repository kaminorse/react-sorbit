import type { Meta, StoryObj } from "@storybook/react-vite";

import Heading from "./Heading";
import Sorbit from "../../base/Sorbit";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Level1: Story = {
  args: {
    level: 1,
  },
  render: (props) => (
    <Sorbit>
      <Heading {...props}>
        {"Level 1"}
      </Heading>
    </Sorbit>
  ),
};

export const Level2: Story = {
  args: {
    level: 2,
  },
  render: (props) => (
    <Sorbit>
      <Heading {...props}>
        {"Level 2"}
      </Heading>
    </Sorbit>
  ),
};
export const Level3: Story = {
  args: {
    level: 3,
  },
  render: (props) => (
    <Sorbit>
      <Heading {...props}>
        {"Level 3"}
      </Heading>
    </Sorbit>
  ),
};

export const Level4: Story = {
  args: {
    level: 4,
  },
  render: (props) => (
    <Sorbit>
      <Heading {...props}>
        {"Level 4"}
      </Heading>
    </Sorbit>
  ),
};

export const Level5: Story = {
  args: {
    level: 5,
  },
  render: (props) => (
    <Sorbit>
      <Heading {...props}>
        {"Level 5"}
      </Heading>
    </Sorbit>
  ),
};

export const Level6: Story = {
  args: {
    level: 6,
  },
  render: (props) => (
    <Sorbit>
      <Heading {...props}>
        {"Level 6"}
      </Heading>
    </Sorbit>
  ),
};
