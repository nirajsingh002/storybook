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

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  isIcon: false,
};



export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};


export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  isIcon: false,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
