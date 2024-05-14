import type { Meta, StoryObj } from "@storybook/react";

import Sorbit from "./Sorbit";
import {
  Button,
  Div,
  Message,
  MessageBody,
  MessageHeader,
} from "../../react-sorbit";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Base/Sorbit",
  component: Sorbit,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Sorbit>;

export default meta;
type Story = StoryObj<typeof meta>;

const elem = (
  <>
    <Div spacing={{ padding: { top: 1, bottom: 1, left: 1, right: 1 } }}>
      <Message>
        <MessageHeader>{"Message"}</MessageHeader>
        <MessageBody>
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        </MessageBody>
      </Message>
    </Div>
    <Div spacing={{ padding: { top: 1, bottom: 1, left: 1, right: 1 } }}>
      <Button>{"Button"}</Button>
    </Div>
    <Div spacing={{ padding: { top: 1, bottom: 1, left: 1, right: 1 } }}>
      <Div fore={{ color: { default: { name: "cyan", lightness: 600 } } }}>
        {"color default cyan 600"}
      </Div>
      <Div
        fore={{
          color: {
            light: { default: { name: "blue", lightness: 600 } },
            dark: { default: { name: "red", lightness: 600 } },
          },
        }}
      >
        {"color light blue 600, dark red 600"}
      </Div>
    </Div>
  </>
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LightTheme: Story = {
  args: {
    colorScheme: "light",
  },
  render: (props) => <Sorbit {...props}>{elem}</Sorbit>,
};
export const DarkTheme: Story = {
  args: {
    colorScheme: "dark",
  },
  render: (props) => <Sorbit {...props}>{elem}</Sorbit>,
};
