import React from 'react';

import { Story } from '@storybook/react';
import DateButton, { DateButtonProps } from './DateButton';

export default {
  title: 'Component/DateButton',
  component: DateButton,
};

const Template: Story<DateButtonProps> = (args) => <DateButton {...args} />;

export const Date = Template.bind({});
Date.args = {
  month: 1,
};
