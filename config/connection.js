const mongoose = require("mongoose");
require('dotenv').config()

    mongoose.connect(process.env.MONGODB_URI)
    .then((res) => console.log('MongoDB connected',res.connection.host))
    .catch((err) => {
      console.error(`Error: ${err.message}`);
      process.exit(1); 
    });
