import React from 'react';
import GardenPage from './GardenPage';

export default {
  title: 'Page/GardenPage',
  component: GardenPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <GardenPage />;
