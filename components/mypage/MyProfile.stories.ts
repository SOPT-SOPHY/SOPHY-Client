import type { Meta, StoryObj } from '@storybook/react';
import MyProfile from './MyProfile';


const meta = {
    title: 'MyProfile',
    component: MyProfile,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } satisfies Meta<typeof MyProfile>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const Primary: Story = {
    args: {
      primary: true,
    },
  };
  

  