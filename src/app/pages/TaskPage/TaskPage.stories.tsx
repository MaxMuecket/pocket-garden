import { Meta } from '@storybook/react';
import React from 'react';
import TaskPage from './TaskPage';

export default {
  title: 'Page/TaskPage',
  component: TaskPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = (): JSX.Element => <TaskPage />;
