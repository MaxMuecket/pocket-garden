import React from 'react';
import { Story } from '@storybook/react';
import SideNav, { SideNavProps } from './SideNav';

export default {
  title: 'Component/SideNav',
  component: SideNav,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<SideNavProps> = (args) => <SideNav {...args} />;

export const Garden = Template.bind({});
Garden.args = {
  showSideNavLabel: 'Garden',
};
