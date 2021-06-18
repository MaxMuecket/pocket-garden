import React from 'react';

import { Story } from '@storybook/react';
import DateButton from './DateButton';

export default {
  title: 'Component/DateButton',
  component: DateButton,
};

const Template: Story = (args) => <DateButton {...args} />;

export const Date = Template.bind({});
Date.args = {};
