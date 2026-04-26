const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./routes/authRoutes');
const jobsRoutes = require('./routes/jobsRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobsRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'RemoteGhar V2 API is running...' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
