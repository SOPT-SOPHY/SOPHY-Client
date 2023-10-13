import type { Meta, StoryObj } from '@storybook/react';
import BooktalkImage from './BooktalkImage';

const meta = {
  title: 'BooktalkImage',
  component: BooktalkImage,
  tags: ['autodocs'],
} satisfies Meta<typeof BooktalkImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    booktalkStatus: 'PRE_READING',
    booktalkImageUrl:
      'https://spicy-gatsby-1c7.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff725c906-ce23-45cd-802c-c9114f2c467a%2FUntitled.png?id=f23867ae-ea7f-4810-a23d-4c7d267b50d4&table=block&spaceId=6e5cda1d-8fe4-4662-9a20-1d9546982dc5&width=400&userId=&cache=v2',
    startDate: '2023-10-18T14:00:00',
    width: 335,
    height: 184,
  },
};
