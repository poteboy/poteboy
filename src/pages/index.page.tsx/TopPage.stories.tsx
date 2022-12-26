import TopPage from ".";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Pages/TopPage",
  component: TopPage,
} as Meta;

const Template: Story = (args) => {
  return <TopPage {...args} />;
};

export const Default = Template.bind({});
