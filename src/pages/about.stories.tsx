import About from "./about";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Pages/AboutPage",
  component: About,
} as Meta;

const Template: Story = (args) => {
  return <About {...args} />;
};

export const Default = Template.bind({});
