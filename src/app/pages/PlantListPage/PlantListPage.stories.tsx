import React from 'react';
import PlantListPage from './PlantListPage';

export default {
  title: 'Page/PlantListPage',
  component: PlantListPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <PlantListPage />;
