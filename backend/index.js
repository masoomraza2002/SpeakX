const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dataRoutes = require("./routes/dataRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URI;

app.use(cors({ origin: 'http://localhost:5173' })); 
app.use(bodyParser.json());

mongoose
  .connect(uri, { dbName: 'speakX' })
  .then(() => console.log('MongoDB Connected to speakX database'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.use('/api', dataRoutes);


app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
