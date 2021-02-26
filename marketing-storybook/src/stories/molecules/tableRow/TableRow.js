import React from "react";
import PropTypes from "prop-types";
import "./tablerow.css";

export const TableRow = ({ ...props }) => {
  const { panelData } = props;
  const renderTableHeader = () => {
    let header = Object.keys(panelData[0]);
    return (
      <tr>
        {header.map((key, index) => {
          return <th key={index}>{key}</th>;
        })}
      </tr>
    );
  };

  const renderTableData = () => {
    return panelData.map((row, index) => {
      let rowData = Object.keys(row);
      return (
        <tr key={index}>
          {rowData.map((key, index) => {
            console.log('key', key);
            debugger;
            if(key === 'imgSrc') {
             return <td key={index}><img src={row[key]} /></td>
            }
            return <td key={index}>{row[key]}</td>;
          })}
        </tr>
      );
    });
  };
  return (
    <table>
      <tbody>
        {renderTableHeader()}
        {renderTableData()}
      </tbody>
    </table>
  );
};

TableRow.propTypes = {
  panelData: PropTypes.array,
};

TableRow.defaultValue = {};
