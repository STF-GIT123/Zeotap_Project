import React, { useState } from "react";
import Row from "./Row";
import Toolbar from "./Toolbar";
import FormulaBar from "./FormulaBar";

const Spreadsheet = () => {
  const [grid, setGrid] = useState([[""]]);
  const [currentCell] = useState({ row: 0, col: 0 });
  const [currentFormula, setCurrentFormula] = useState("");

  const handleCellValueChange = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  const handleAddRow = () => {
    const newGrid = [...grid, Array(grid[0].length).fill("")];
    setGrid(newGrid);
  };

  const handleAddColumn = () => {
    const newGrid = grid.map((row) => [...row, ""]);
    setGrid(newGrid);
  };

  const handleClear = () => setGrid([[""]]);

  const handleFormulaChange = (formula) => {
    setCurrentFormula(formula);
    const { row, col } = currentCell;
    handleCellValueChange(row, col, formula);
  };

  return (
    <div className="spreadsheet">
      <Toolbar onAddRow={handleAddRow} onAddColumn={handleAddColumn} onClear={handleClear} />
      <FormulaBar
        currentFormula={currentFormula}
        onFormulaChange={handleFormulaChange}
      />
      <div className="grid">
        {grid.map((rowData, rowIndex) => (
          <Row
            key={rowIndex}
            rowIndex={rowIndex}
            rowData={rowData}
            onCellValueChange={handleCellValueChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Spreadsheet;