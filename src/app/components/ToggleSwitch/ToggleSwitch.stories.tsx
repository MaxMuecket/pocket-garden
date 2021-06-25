import React from 'react';
import { Story } from '@storybook/react';

import ToggleSwitch, { ToggleSwitchProps } from './ToggleSwitch';

export default {
  title: 'Component/ToggleSwitch',
  component: ToggleSwitch,
};

const Template: Story<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />;

export const YesNo = Template.bind({});
YesNo.args = { checked: false };
