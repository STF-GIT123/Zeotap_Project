import React from "react";

const Toolbar = ({ onAddRow, onAddColumn, onClear }) => {
  return (
    <div className="toolbar">
      <button onClick={onAddRow}>Add Row</button>
      <button onClick={onAddColumn}>Add Column</button>
      <button onClick={onClear}>Clear All</button>
    </div>
  );
};

export default Toolbar;