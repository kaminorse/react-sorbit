import type { Meta, StoryObj } from "@storybook/react-vite";

import Sorbit from "../../base/Sorbit";
import DialogAvatar from "../DialogAvatar";
import DialogAvatarContainer from "../DialogAvatarContainer";
import DialogContentContainer from "../DialogContentContainer";
import DialogMessage from "../DialogMessage";
import DialogMessageInner from "../DialogMessageInner";
import DialogName from "../DialogName";
import Dialog from "./Dialog";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <Sorbit>
      <Dialog {...props}>
        <DialogAvatarContainer>
          <DialogAvatar
            src="https://kaminorse.github.io/sorbit/images/avatar/kaminorse/kaminorse.png"
            alt="avatar"
          />
        </DialogAvatarContainer>
        <DialogContentContainer>
          <DialogName>{"Name"}</DialogName>
          <DialogMessage>
            <DialogMessageInner>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </DialogMessageInner>
          </DialogMessage>
        </DialogContentContainer>
      </Dialog>
    </Sorbit>
  ),
};

export const AvatarSizeLarge: Story = {
  args: {
    avatarSize: "large",
  },
  render: (props) => (
    <Sorbit>
      <Dialog {...props}>
        <DialogAvatarContainer>
          <DialogAvatar
            src="https://kaminorse.github.io/sorbit/images/avatar/kaminorse/kaminorse.png"
            alt="avatar"
          />
        </DialogAvatarContainer>
        <DialogContentContainer>
          <DialogName>{"Name"}</DialogName>
          <DialogMessage>
            <DialogMessageInner>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </DialogMessageInner>
          </DialogMessage>
        </DialogContentContainer>
      </Dialog>
    </Sorbit>
  ),
};

export const AvatarSizeSmall: Story = {
  args: {
    avatarSize: "small",
  },
  render: (props) => (
    <Sorbit>
      <Dialog {...props}>
        <DialogAvatarContainer>
          <DialogAvatar
            src="https://kaminorse.github.io/sorbit/images/avatar/kaminorse/kaminorse.png"
            alt="avatar"
          />
        </DialogAvatarContainer>
        <DialogContentContainer>
          <DialogName>{"Name"}</DialogName>
          <DialogMessage>
            <DialogMessageInner>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </DialogMessageInner>
          </DialogMessage>
        </DialogContentContainer>
      </Dialog>
    </Sorbit>
  ),
};

export const IsAvatarCircle: Story = {
  args: {
    isAvatarCircle: true,
  },
  render: (props) => (
    <Sorbit>
      <Dialog {...props}>
        <DialogAvatarContainer>
          <DialogAvatar
            src="https://kaminorse.github.io/sorbit/images/avatar/kaminorse/kaminorse.png"
            alt="avatar"
          />
        </DialogAvatarContainer>
        <DialogContentContainer>
          <DialogName>{"Name"}</DialogName>
          <DialogMessage>
            <DialogMessageInner>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </DialogMessageInner>
          </DialogMessage>
        </DialogContentContainer>
      </Dialog>
    </Sorbit>
  ),
};

export const IsRight: Story = {
  args: {
    isRight: true,
  },
  render: (props) => (
    <Sorbit>
      <Dialog {...props}>
        <DialogContentContainer>
          <DialogName>{"Name"}</DialogName>
          <DialogMessage>
            <DialogMessageInner>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </DialogMessageInner>
          </DialogMessage>
        </DialogContentContainer>
        <DialogAvatarContainer>
          <DialogAvatar
            src="https://kaminorse.github.io/sorbit/images/avatar/kaminorse/kaminorse.png"
            alt="avatar"
          />
        </DialogAvatarContainer>
      </Dialog>
    </Sorbit>
  ),
};

