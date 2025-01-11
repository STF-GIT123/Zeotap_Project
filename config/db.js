const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/spreadsheetDB';

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;