import express  from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes.js';

const app = express();
const port = 5000; // Atur port sesuai kebutuhan Anda

// MongoDB Atlas connection string
// const mongoURI = 'mongodb+srv://nayarasaffa:marklee99@cluster0.wqe91iw.mongodb.net/test?retryWrites=true&w=majority';

// // Connect to MongoDB Atlas
// mongoose.connect(mongoURI);

mongoose.connect('mongodb://127.0.0.1:27017/YT-Analysis-Project');
const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

app.use(express.json());

app.use(routes)

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
