import React from 'react';

import { Story } from '@storybook/react';
import MainButton, { MainButtonProps } from './MainButton';

export default {
  title: 'Component/MainButton',
  component: MainButton,
};

const Template: Story<MainButtonProps> = (args) => <MainButton {...args} />;

export const Plant = Template.bind({});
Plant.args = {
  children: 'plant',
};

export const Edit = Template.bind({});
Edit.args = {
  children: 'edit',
};

export const Task = Template.bind({});
Task.args = {
  children: 'task',
};

export const Create = Template.bind({});
Create.args = {
  children: 'create',
};
