const mongoose = require('mongoose');
const dns = requrie("dns")
dns.setServers(["8.8.8.8","8.8.4.4"])

const connectDB = async () => {
  try {
    
    await mongoose.connect('mongodb+srv://KulsumShaik24_db_user:<kulsum@20>@cluster0.nxftcfq.mongodb.net/kulsum?appname=cluster0');
    
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
