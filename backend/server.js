const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const carRoutes = require('./routes/carRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api/cars', carRoutes);
app.use('/api/bookings', bookingRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something went wrong!')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
