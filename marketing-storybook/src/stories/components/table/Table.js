import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from '../../molecules/Accordion';
import './table.css';

export const Table = ({ ...props }) => {
    const {activeState, accordionHead, tableData, isDisabled} = props;
    return (
        <Accordion activeState={activeState} accordionHead={accordionHead} panelData={tableData} isDisabled={isDisabled}/>
    )
}

Table.propTypes = {
    tableData: PropTypes.array,
};

Table.defaultProp = {}
