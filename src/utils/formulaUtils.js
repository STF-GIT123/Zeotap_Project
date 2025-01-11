/**
 * Parse and evaluate a formula string.
 * @param {string} formula - The formula string to evaluate, e.g., "=A1+B1".
 * @param {Array<Array<string|number>>} grid - The spreadsheet data as a 2D array.
 * @returns {number|string} - The evaluated result or an error message.
 */
export const evaluateFormula = (formula, grid) => {
    try {
      if (!formula.startsWith("=")) {
        // If not a formula, return the raw value.
        return isNaN(formula) ? formula : parseFloat(formula);
      }
  
      // Remove the "=" sign from the formula
      let expression = formula.substring(1);
  
      // Replace cell references (e.g., A1, B2) with their values from the grid
      expression = expression.replace(/([A-Z]+)([0-9]+)/g, (match, colRef, rowRef) => {
        const colIndex = colRef.toUpperCase().charCodeAt(0) - 65; // Convert column letter to index (A=0, B=1, etc.)
        const rowIndex = parseInt(rowRef, 10) - 1; // Convert row number to index (1-based to 0-based)
        const cellValue = grid[rowIndex]?.[colIndex]; // Get the cell value from the grid
  
        if (cellValue === undefined || cellValue === null) {
          // eslint-disable-next-line no-template-curly-in-string
          throw new Error('Invalid cell reference: ${match}');
        }
  
        // Return the value or 0 if the cell is empty
        return isNaN(cellValue) ? 0 : cellValue;
      });
  
      // Safely evaluate the expression
      // eslint-disable-next-line no-eval
      return eval(expression); // Note: eval should be used with caution
    } catch (error) {
      console.error("Error evaluating formula:", error.message);
      return "#ERROR";
    }
  };
  
  /**
   * Update the grid with formulas recalculated.
   * @param {Array<Array<string|number>>} grid - The current grid data.
   * @returns {Array<Array<string|number>>} - The updated grid with recalculated formulas.
   */
  export const recalculateGrid = (grid) => {
    const newGrid = grid.map((row, rowIndex) =>
      row.map((cell, colIndex) => {
        if (typeof cell === "string" && cell.startsWith("=")) {
          return evaluateFormula(cell, grid); // Recalculate formula
        }
        return cell; // Return non-formula values as-is
      })
    );
    return newGrid;
  };