import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    children: "TEST ME",
  },
  storyName: "Default",
};
