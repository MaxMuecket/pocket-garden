import { Meta } from '@storybook/react';
import React from 'react';
import PlantPage from './PlantPage';

export default {
  title: 'Page/PlantPage',
  component: PlantPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = (): JSX.Element => <PlantPage />;
