require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch((err) => console.error('MongoDB connection failed:', err));

app.get('/', (req, res) => {
  res.send('Server is working and connected to MongoDB Atlas!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
