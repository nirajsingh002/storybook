import React from "react";
import PropTypes from "prop-types";
import { Button } from '../atoms/Button';
import "./accordion.css";

/**
 * Accordion UI component for user interaction
 */
export const Accordion = ({ ...props }) => {
    const {activeState, accordionHead, panelData, isDisabled} = props;

    const renderTableHeader =  () => {
        let header = Object.keys(panelData[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    const renderTableData = ()  => {
        return panelData.map((student, index) => {
           const { id, name, age, email } = student //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{email}</td>
              </tr>
           )
        })
     }
  
    const renderTable = () => {
        return (<table id='students'>
               <tbody>
                  <tr>{renderTableHeader()}</tr>
                  {renderTableData()}
               </tbody>
            </table>)
    }
  return (
    <div>
        <Button isActive={activeState} isDisabled={isDisabled} accordionClassName="accordion" label={accordionHead}/>
      <div className="panel">
        <p>
          {Array.isArray(panelData) ? renderTable() : panelData}
        </p>
      </div>
    </div>
  );
};

Accordion.propTypes = {
    activeState: PropTypes.bool,
    accordionHead: PropTypes.string,
    panelData: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
      ]),
    isDisabled: PropTypes.bool,
};

Accordion.defaultProps = {
    activeState: false,
    accordionHead: 'Section 1',
    panelData: '',
    isDisabled: false,
};
