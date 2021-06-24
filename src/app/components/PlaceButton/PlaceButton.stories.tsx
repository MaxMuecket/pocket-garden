import React from 'react';

import { Story } from '@storybook/react';
import PlaceButton, { PlaceButtonProps } from './PlaceButton';

export default {
  title: 'Component/PlaceButton',
  component: PlaceButton,
};

const Template: Story<PlaceButtonProps> = (args) => <PlaceButton {...args} />;

export const Place = Template.bind({});
Place.args = {
  place: 1,
};
