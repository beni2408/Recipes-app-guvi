import mongoose from "mongoose";
const dbURI =
  "mongodb+srv://jascarbenish_db_user:q1b0reG7GeJxmMog@guvirecipeappcluster.clxtja3.mongodb.net/SampleDB?retryWrites=true&w=majority&appName=guvirecipeappcluster";

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
export default connectDB;
