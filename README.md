# Zeotap_Project

# *Google Sheets Mimic Web Application*

## *Objective*
This project aims to create a web application that closely mimics Google Sheets, including its user interface and core functionalities like mathematical functions, data quality features, and key interactions.

---

## *Tech Stack*
### *Frontend*
- *React.js*: For building an interactive and dynamic UI.
- *Material-UI*: For pre-styled components to enhance the look and feel of the application.
- *Redux/Context API*: For managing application state across components.

### *Backend (Optional for Advanced Features)*
- *Node.js with Express*: To handle backend services like saving and loading spreadsheets.
- *Database*: SQLite for storing spreadsheet data locally or PostgreSQL for cloud storage.

---

## *Data Structures*
### *1. Spreadsheet Grid*
- The grid (spreadsheet) is represented as a *2D array*, where each element represents a cell:
  javascript
  const grid = [
    ["", "A", "B", "C"],
    [1, 2, 3, 4],
    [2, 5, 6, 7],
  ];
  
- *Example*:
  - grid[1][1] refers to cell A1, which has the value 2.
  - Adding a new column involves inserting a new element in each row.

---

### *2. Cell Dependencies*
- *Dependency Graph: To manage formula updates dynamically, we use a **Directed Acyclic Graph (DAG)*:
  javascript
  const dependencies = {
    "A1": ["B1", "C1"], // A1 depends on B1 and C1
  };
  
- *Example*:
  - Formula in A1: =B1 + C1.
  - If B1 changes, the app recalculates A1 based on its dependency.

---

## *Features*

### *1. Spreadsheet Interface*
- *Grid UI*: A grid mimicking Google Sheets' layout.
- *Formatting Options*: Toolbar for bold, italic, font size, and color.
- *Drag Functionality*:
  - Drag values/formulas across cells using mouse events.
- *Example*:
  - Dragging =SUM(B1:B5) from C1 to D1 automatically adjusts the formula.

### *2. Mathematical Functions*
- Implemented using JavaScript functions:
  - *SUM*: Calculates the sum of selected cells.
    javascript
    function SUM(range) {
      return range.reduce((acc, val) => acc + Number(val), 0);
    }
    
    *Example*:  
    For cells A1:A3 containing [10, 20, 30], SUM(A1:A3) returns 60.
  - *AVERAGE*: Calculates the average of selected cells.
  - *MAX*: Finds the maximum value in a range.
  - *MIN*: Finds the minimum value in a range.
  - *COUNT*: Counts numeric values in a range.

### *3. Data Quality Functions*
- *TRIM*: Removes whitespace.
  javascript
  function TRIM(value) {
    return value.trim();
  }
  
  *Example*: Input ` " Hello " ` returns "Hello".
- *UPPER*: Converts text to uppercase.
  *Example*: Input hello returns HELLO.
- *REMOVE_DUPLICATES*: Removes duplicate rows from a range.
  *Example*: [1, 2, 2, 3] returns [1, 2, 3].

### *4. Data Entry and Validation*
- Accepts numbers, text, and dates.
- Prevents invalid data (e.g., non-numeric input in numeric cells).

---

## *Bonus Features*
- *Save and Load*: Save spreadsheets using localStorage or a database.
- *Data Visualization*:
  - Use Chart.js to create bar charts or line graphs.
  - *Example*: Visualize sales data over time.

---

## *How to Run*

### *Step 1: Clone the Repository*
bash
git clone https://github.com/your-username/google-sheets-mimic.git
cd google-sheets-mimic


### *Step 2: Install Dependencies*
bash
npm install


### *Step 3: Run the Application*
bash
npm start


### *Step 4: Open in Browser*
- The app will be available at http://localhost:3000/
---

## *Deployment*
Deployed using *Render*. The deployed  website can be seen here, where, we can add the number of rows and columns we need and can clear when not needed just like as in the Google Sheets.This can be seen here:  http://localhost:3000/

---

## *Code Explanation*

### *Why React.js?*
React's virtual DOM and component-based structure allow for efficient updates and reusability, crucial for real-time interactions like a spreadsheet.

### *Why DAG for Cell Dependencies?*
To handle formula recalculations efficiently:
- Changes in one cell propagate only to its dependents.
- Prevents circular dependencies.

---

## *Example Use Case*
### *Scenario*: Budget Calculation
1. Enter data in columns:
   
   A1: "Rent"  | B1: 500
   A2: "Food"  | B2: 200
   A3: "Total" | B3: =SUM(B1:B2)
   
2. Formula in B3 dynamically updates to 700 when data changes.

---

## *Testing*
- Run unit tests for mathematical and data quality functions:
  bash
  npm test
  
- *Example*:
  - Test for SUM function:
    javascript
    expect(SUM([10, 20, 30])).toBe(60);
    

---
