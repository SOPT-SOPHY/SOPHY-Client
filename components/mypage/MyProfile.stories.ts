import type { Meta, StoryObj } from '@storybook/react';
import MyProfile from './MyProfile';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'MyProfile',
    component: MyProfile,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } satisfies Meta<typeof MyProfile>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
  export const Primary: Story = {
    args: {
      primary: true,
    },
  };
  

  