import React from "react";
import Cell from "./Cell";

const Row = ({ rowIndex, rowData, onCellValueChange }) => {
  return (
    <div className="row">
      {rowData.map((cellValue, colIndex) => (
        <Cell
          // eslint-disable-next-line no-template-curly-in-string
          key={'${rowIndex}-${colIndex}'}
          value={cellValue}
          rowIndex={rowIndex}
          colIndex={colIndex}
          onValueChange={onCellValueChange}
        />
      ))}
    </div>
  );
};

export default Row;