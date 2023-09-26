import type { Meta, StoryObj } from '@storybook/react';
import Menus from '../menus/Menus';

const meta = {
  title: 'Menus',
  component: Menus,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Menus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
