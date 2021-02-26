import React from 'react';

import { TableRow } from './TableRow';

export default {
  title: '/Molecules/TableRow',
  component: TableRow,
};

const Template = (args) => <TableRow {...args} />;

export const Rows = Template.bind({});
Rows.args = {
  label: '',
  panelData: [
    { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com', 'imgSrc': "/images/searchIcon.png"},
    { id: 2, name: 'Ali', age: 19, email: 'ali@email.com', 'imgSrc': "/images/searchIcon.png"},
    { id: 3, name: 'Saad', age: 16, email: 'saad@email.com', 'imgSrc': "/images/searchIcon.png"},
    { id: 4, name: 'Asad', age: 25, email: 'asad@email.com', 'imgSrc': "/images/searchIcon.png" }
 ]
};

