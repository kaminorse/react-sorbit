import type { Meta, StoryObj } from "@storybook/react";

import Message from "./Message";
import Sorbit from "../../base/Sorbit";
import MessageHeader from "./MessageHeader";
import MessageBody from "./MessageBody";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Message",
  component: Message,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    colorType: undefined,
  },
  render: (props) => (
    <Sorbit>
      <Message {...props}>
        <MessageHeader>
          {"Header"}
        </MessageHeader>
        <MessageBody>
          {"Body"}
        </MessageBody>
      </Message>
    </Sorbit>
  ),
};
