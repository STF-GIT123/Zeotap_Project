import React from "react";

const FormulaBar = ({ currentFormula, onFormulaChange }) => {
  return (
    <div className="formula-bar">
      <input
        type="text"
        value={currentFormula}
        onChange={(e) => onFormulaChange(e.target.value)}
        placeholder="Enter a formula (e.g., =A1+B1)"
      />
    </div>
  );
};

export default FormulaBar;