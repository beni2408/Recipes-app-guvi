import express from "express";
import { connect } from "mongoose";
import connectDB from "./src/config/db.js";

const app = express();

const PORT = 8080;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
