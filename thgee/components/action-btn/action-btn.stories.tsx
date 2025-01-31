import type { Meta, StoryObj } from "@storybook/react";
import ActionBtn from "./action-btn";

const meta: Meta<typeof ActionBtn> = {
  title: "Components/ActionBtn",
  component: ActionBtn,
  argTypes: {
    onClick: { action: "click" },
    type: {
      control: "select",
      options: ["add", "delete", "edit"], // 선택할 버튼 타입
    },
    active: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ActionBtn>;

export const AddActive: Story = {
  args: {
    type: "add",
    active: true,
  },
};

export const AddInactive: Story = {
  args: {
    type: "add",
    active: false,
  },
};

export const Delete: Story = {
  args: {
    type: "delete",
  },
};

export const Edit: Story = {
  args: {
    type: "edit",
  },
};
