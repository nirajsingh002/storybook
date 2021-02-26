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
  accordionData: [{head: 'Accordion Head 1', panel: [
    { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com', 'imgSrc': "/images/searchIcon.png"},
    { id: 2, name: 'Ali', age: 19, email: 'ali@email.com', 'imgSrc': "/images/searchIcon.png"},
    { id: 3, name: 'Saad', age: 16, email: 'saad@email.com', 'imgSrc': "/images/searchIcon.png"},
    { id: 4, name: 'Asad', age: 25, email: 'asad@email.com', 'imgSrc': "/images/searchIcon.png"}
 ]}, {head: 'Accordion Head 2', panel: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}],
};

