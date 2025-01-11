import React, { useState } from "react";

const Cell = ({ value, onValueChange, rowIndex, colIndex }) => {
  const [editing, setEditing] = useState(false);

  const handleDoubleClick = () => setEditing(true);

  const handleChange = (e) => {
    onValueChange(rowIndex, colIndex, e.target.value);
  };

  const handleBlur = () => setEditing(false);

  return (
    <div className="cell" onDoubleClick={handleDoubleClick}>
      {editing ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};

export default Cell;