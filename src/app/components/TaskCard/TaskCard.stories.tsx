import React from 'react';

import { Story } from '@storybook/react';
import TaskCard, { TaskCardProps } from './TaskCard';

export default {
  title: 'Component/TaskCard',
  component: TaskCard,
};

const Template: Story<TaskCardProps> = (args) => <TaskCard {...args} />;

export const Fern = Template.bind({});
Fern.args = {
  plantSelect: 'Fern',
  title: 'Fern',
};
