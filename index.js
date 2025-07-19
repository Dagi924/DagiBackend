require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Server is working!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
