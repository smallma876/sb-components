import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    size: { control: { type: "select" } },
    color: { control: { type: "select" } },
    fontColor: { control: "color" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  allCaps: false, // true: capitalizar toda la palabra
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true, // true: capitalizar toda la palabra
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary", // primary | secondary | tertiary
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: "normal",
  color: "tertiary",
};

export const CustonFontColor = Template.bind({});
CustonFontColor.args = {
  size: "h1",
  fontColor: "#5517ac",
};

export const CustonBackgroundColor = Template.bind({});
CustonBackgroundColor.args = {
  size: "h1",
  fontColor: "white",
  backgroundColor: "black",
};
