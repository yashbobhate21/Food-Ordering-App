import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
    const dbURI = process.env.MONGO_URI;  // Access the MongoDB URI from the environment variable
    if (!dbURI) {
        throw new Error("MongoDB URI is not defined in environment variables.");
    }

    await mongoose.connect(dbURI)
        .then(() => console.log("DB connected"))
        .catch((error) => console.error("DB connection failed:", error));
};
