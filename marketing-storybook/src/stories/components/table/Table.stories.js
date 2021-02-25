/**
 * Table stories
 */

import React from 'react';

import { Table } from './Table';

export default {
  title: '/Components/Table',
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const TableComponent = Template.bind({});
TableComponent.args = {
    activeState: false,
    accordionHead: 'Table According',
    tableData: [
        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
     ],
     isDisabled: false,
}



