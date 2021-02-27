import React from 'react';

import { Radio } from './Radio';

export default {
  title: '/Atoms/Radio',
  component: Radio,
};

const Template = (args) => <Radio {...args} />;

export const CheckedRadioButton = Template.bind({});
CheckedRadioButton.args = {
  checked: false,
  label: 'Male',
};
