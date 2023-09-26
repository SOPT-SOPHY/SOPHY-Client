import type { Meta, StoryObj } from '@storybook/react';
import Booktalk from './Booktalk';

const meta = {
  title: 'Booktalk',
  component: Booktalk,
  tags: ['autodocs'],
} satisfies Meta<typeof Booktalk>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: [
      {
        booktalkId: 0,
        preliminaryInfo: 'READING',
        title: 'string',
        author: 'string',
        startDate: '2023-09-29T14:39:19.073Z',
        endDate: '2023-09-29T14:39:19.073Z',
        place: 'string',
        participant: 0,
        maximum: 0,
        booktalkImageUrl: 'string',
      },
      {
        booktalkId: 1,
        preliminaryInfo: 'PRE_READING',
        title: 'string',
        author: 'string',
        startDate: '2023-09-29T14:39:19.073Z',
        endDate: '2023-09-29T14:39:19.073Z',
        place: 'string',
        participant: 0,
        maximum: 0,
        booktalkImageUrl: 'string',
      },
      {
        booktalkId: 2,
        preliminaryInfo: 'PRE_READING',
        title: 'string',
        author: 'string',
        startDate: '2023-09-29T14:39:19.073Z',
        endDate: '2023-09-29T14:39:19.073Z',
        place: 'string',
        participant: 0,
        maximum: 0,
        booktalkImageUrl: 'string',
      },
    ],
  },
};
