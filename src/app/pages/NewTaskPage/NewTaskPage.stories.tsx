import { Meta } from '@storybook/react';
import React from 'react';
import NewTaskPage from './NewTaskPage';

export default {
  title: 'Page/NewTaskPage',
  component: NewTaskPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = (): JSX.Element => <NewTaskPage />;
