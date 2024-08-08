import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export function connectToDB() {
  mongoose
    .connect(process.env.DB_STRING)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error(`MongoDB connection error: ${err}`));
}
