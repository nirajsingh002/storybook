import React from 'react';

import { Button } from './Button';

export default {
  title: '/Atoms/button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const accordionButton = Template.bind({});
accordionButton.args = {
  label: '',
  isActive: false,
};

