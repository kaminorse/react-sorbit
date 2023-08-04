import type { Meta, StoryObj } from "@storybook/react";

import Columns from "./Columns";
import Sorbit from "../../base/Sorbit";
import { Column } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Layouts/Columns",
  component: Columns,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Columns>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
  },
  render: (props) => (
    <Sorbit>
      <Columns {...props}>
        <Column>
          {"Column1"}
        </Column>
        <Column>
          {"Column2"}
        </Column>
        <Column>
          {"Column3"}
        </Column>
        <Column>
          {"Column4"}
        </Column>
        <Column>
          {"Column5"}
        </Column>
        <Column>
          {"Column6"}
        </Column>
        <Column>
          {"Column7"}
        </Column>
        <Column>
          {"Column8"}
        </Column>
        <Column>
          {"Column9"}
        </Column>
        <Column>
          {"Column10"}
        </Column>
        <Column>
          {"Column11"}
        </Column>
        <Column>
          {"Column12"}
        </Column>
      </Columns>
    </Sorbit>
  ),
};
