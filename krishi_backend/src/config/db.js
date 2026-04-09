const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://ROHIT:ROHIT@cluster0.tea3tom.mongodb.net/krishiDB?appName=Cluster0';

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;
