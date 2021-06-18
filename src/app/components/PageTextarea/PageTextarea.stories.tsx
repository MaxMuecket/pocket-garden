import React from 'react';

import { Story } from '@storybook/react';
import PageTextarea, { PageInputProps } from './PageTextarea';

export default {
  title: 'Component/PageTextarea',
  component: PageTextarea,
};

const Template: Story<PageInputProps> = (args) => <PageTextarea {...args} />;

export const newPlantNote = Template.bind({});
newPlantNote.args = {
  placeholder: 'Note...',
  variant: 'newPlantNote',
};

export const newTaskDescription = Template.bind({});
newTaskDescription.args = {
  placeholder: 'Description...',
  variant: 'newTaskDescription',
};
