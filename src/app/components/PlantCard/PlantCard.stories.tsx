import React from 'react';

import { Story } from '@storybook/react';
import PlantCard, { PlantCardProps } from './PlantCard';

export default {
  title: 'Component/PlantCard',
  component: PlantCard,
};

const Template: Story<PlantCardProps> = (args) => <PlantCard {...args} />;

export const Fern = Template.bind({});
Fern.args = {
  imgSrc: 'Fern.jpg',
  imgName: 'Fern',
  name: 'Fern',
};
