import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // Import the cors middleware
import routes from "./routes/routes.js";

const app = express();
const port = 5000;

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// Set specific origins that are allowed to access your server

mongoose.connect("mongodb://127.0.0.1:27017/YT-Analysis-Project", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
