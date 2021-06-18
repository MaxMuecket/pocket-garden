import React from 'react';

import { Story } from '@storybook/react';
import PlaceButton from './PlaceButton';

export default {
  title: 'Component/PlaceButton',
  component: PlaceButton,
};

const Template: Story = (args) => <PlaceButton {...args} />;

export const Place = Template.bind({});
Place.args = {};
