import React from 'react';

import { Story } from '@storybook/react';
import PageInput, { PageInputProps } from './PageInput';

export default {
  title: 'Component/PageInput',
  component: PageInput,
};

const Template: Story<PageInputProps> = (args) => <PageInput {...args} />;

export const newPlantName = Template.bind({});
newPlantName.args = {
  placeholder: 'Please enter a name',
  variant: 'newPlantName',
};

export const newTaskTitle = Template.bind({});
newTaskTitle.args = {
  placeholder: 'Title',
  variant: 'newTaskTitle',
};

export const newTaskDate = Template.bind({});
newTaskDate.args = {
  placeholder: '',
  variant: 'newTaskDate',
};
