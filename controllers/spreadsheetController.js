const Spreadsheet = require('../models/SpreadsheetModel');

// Create a new spreadsheet
const createSpreadsheet = async (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data) || !data.length) {
    return res.status(400).json({ error: 'Invalid data format. Data should be a 2D array.' });
  }

  try {
    const newSpreadsheet = new Spreadsheet({ data });
    await newSpreadsheet.save();
    res.status(201).json(newSpreadsheet);
  } catch (error) {
    console.error('Error creating spreadsheet:', error);
    res.status(500).json({ error: 'Failed to create spreadsheet.' });
  }
};

// Get the spreadsheet data
const getSpreadsheet = async (req, res) => {
  try {
    const spreadsheet = await Spreadsheet.findOne();
    if (!spreadsheet) {
      return res.status(404).json({ error: 'Spreadsheet not found.' });
    }
    res.status(200).json(spreadsheet);
  } catch (error) {
    console.error('Error fetching spreadsheet:', error);
    res.status(500).json({ error: 'Failed to fetch spreadsheet.' });
  }
};

// Update the spreadsheet data
const updateSpreadsheet = async (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data) || !data.length) {
    return res.status(400).json({ error: 'Invalid data format. Data should be a 2D array.' });
  }

  try {
    const spreadsheet = await Spreadsheet.findOne();
    if (!spreadsheet) {
      return res.status(404).json({ error: 'Spreadsheet not found.' });
    }

    spreadsheet.data = data; // Update the spreadsheet data
    await spreadsheet.save();
    res.status(200).json(spreadsheet);
  } catch (error) {
    console.error('Error updating spreadsheet:', error);
    res.status(500).json({ error: 'Failed to update spreadsheet.' });
  }
};

module.exports = {
  createSpreadsheet,
  getSpreadsheet,
  updateSpreadsheet
};