import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from '../../molecules/accordion/Accordion';
import './table.css';

export const Table = ({ ...props }) => {
    const {activeState, accordionData, isDisabled} = props;
    
    return (
        <Accordion activeState={activeState} accordionData={accordionData} isDisabled={isDisabled}/>
    )
}

Table.propTypes = {
    activeState: PropTypes.bool,
    accordionData: PropTypes.array,
    isDisabled: PropTypes.bool,
};

Table.defaultProp = {}
