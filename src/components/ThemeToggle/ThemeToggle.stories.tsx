import { Meta, Story } from "@storybook/react";
import { ThemeToggle } from "./ThemeToggle";
import styled from "@emotion/styled";
import { StoryLayout } from "@src/utils";

export default {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
} as Meta;

const Template: Story = (args) => (
  <Layout>
    <ThemeToggle />
  </Layout>
);

export const Default = Template.bind({});

const Layout = styled.div`
  /* background: white; */
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
