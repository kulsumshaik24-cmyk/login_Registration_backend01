const mongoose = require('mongoose');
const dns = require('dns');

// Use public DNS servers as a fallback if the environment blocks SRV lookups
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
  try {
    const connString = 'mongodb+srv://KulsumShaik24_db_user:kulsum20@cluster0.nxftcfq.mongodb.net/kulsum?appName=cluster0';

    await mongoose.connect(connString, { connectTimeoutMS: 10000 });
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
