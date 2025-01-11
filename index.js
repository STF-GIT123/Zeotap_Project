const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const spreadsheetRoutes = require('./routes/spreadsheetRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Parse JSON bodies

mongoose.connect('mongodb://localhost/spreadsheetDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.use('/api/spreadsheet', spreadsheetRoutes);

app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});