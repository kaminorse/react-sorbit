import type { Meta, StoryObj } from "@storybook/react";

import Nav from "./Nav";
import SorbitStatic from "../../base/SorbitStatic";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";
import NavBrandLeft from "./NavBrandLeft";
import NavBrandCenter from "./NavBrandCenter";
import NavBrandRight from "./NavBrandRight";
import Hamburger from "../Hamburger";
import NavMenuItem from "./NavMenuItem";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Nav",
  component: Nav,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

const navMenuItems = (
  <>
    <NavMenuItem as="a" href="/">{"NavMenuItem1"}</NavMenuItem>
    <NavMenuItem as="a" href="/">{"NavMenuItem2"}</NavMenuItem>
    <NavMenuItem as="a" href="/">{"NavMenuItem3"}</NavMenuItem>
  </>
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <SorbitStatic>
      <Nav {...props}>
        <NavMobile>
          <NavBrand>
            <NavBrandLeft>
              <Hamburger />
            </NavBrandLeft>
            <NavBrandCenter>{"Center"}</NavBrandCenter>
            <NavBrandRight></NavBrandRight>
          </NavBrand>
          <NavMenu>{navMenuItems}</NavMenu>
        </NavMobile>
        <NavDesktop>
          <NavBrand>
            <NavBrandLeft>{"NavBrandLeft"}</NavBrandLeft>
            <NavBrandCenter>{"NavBrandCenter"}</NavBrandCenter>
            <NavBrandRight>{"NavBrandRight"}</NavBrandRight>
          </NavBrand>
          <NavMenu >{navMenuItems}</NavMenu>
        </NavDesktop>
      </Nav>
    </SorbitStatic>
  ),
};
