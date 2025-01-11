import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import Spreadsheet from './components/Spreadsheet';

const App = () => {
  const [spreadsheetData, setSpreadsheetData] = useState([[]]);
  const [selectedCells, setSelectedCells] = useState([]);

  const handleAddRow = () => {
    setSpreadsheetData([...spreadsheetData, new Array(spreadsheetData[0].length).fill('')]);
  };

  const handleAddColumn = () => {
    setSpreadsheetData(spreadsheetData.map(row => [...row, '']));
  };

  const handleApplyFunction = (result) => {
    // Apply result to the first selected cell
    if (selectedCells.length > 0) {
      const updatedData = [...spreadsheetData];
      updatedData[selectedCells[0].rowIndex][selectedCells[0].colIndex] = result;
      setSpreadsheetData(updatedData);
    }
  };

  return (
    <div className="app">
      <Toolbar 
        onAddRow={handleAddRow} 
        onAddColumn={handleAddColumn} 
        onApplyFunction={handleApplyFunction} 
        selectedCells={selectedCells} 
      />
      <Spreadsheet data={spreadsheetData} setSelectedCells={setSelectedCells} />
    </div>
  );
};

export default App;