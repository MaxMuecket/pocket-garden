import React from 'react';
import Gardening from './Gardening';

export default {
  title: 'Page/Gardening',
  component: Gardening,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <Gardening />;
