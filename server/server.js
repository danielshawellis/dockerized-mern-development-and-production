const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

const app = express();

// Require Routes
const items = require('./routes/api/items');

// Bodyparser Middleware
app.use(bodyParser.json());

// Connect to Mongo
mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb://mongo:27017/mongo-test")
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

// Start Server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
