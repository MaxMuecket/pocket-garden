import { Meta } from '@storybook/react';
import React from 'react';
import NewPlantPage from './NewPlantPage';

export default {
  title: 'Page/NewPlantPage',
  component: NewPlantPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = (): JSX.Element => <NewPlantPage />;
