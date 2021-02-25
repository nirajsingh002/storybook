import React from 'react';

import { Accordion } from './Accordion';

export default {
  title: '/Molecules/accordion',
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const AccordionMolecules = Template.bind({});
AccordionMolecules.args = {
  label: '',
  activeState: false,
  panelData: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

