import type { Meta, StoryObj } from '@storybook/react';
import { GlobalModal } from '../components/GlobalModal';

const meta = {
  title: 'Examples/GlobalModal',
  component: GlobalModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GlobalModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
