const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const CLIENT_DEV_PORT = process.env.CLIENT_DEV_PORT || 3000;
const DB_URI = process.env.DB_URI || "mongodb://mongo:27017/mongo-test";

const app = express();

// Require Routes
const items = require('./routes/api/items');

// Bodyparser Middleware
app.use(bodyParser.json());

// CORS Middleware to Prevent CORS Errors During Development
if (process.env.NODE_ENV !== 'production') app.use(cors({origin: `http://localhost:${CLIENT_DEV_PORT}`}));

// Connect to Mongo
mongoose.set('useNewUrlParser', true);
mongoose.connect(DB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

// Start Server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
