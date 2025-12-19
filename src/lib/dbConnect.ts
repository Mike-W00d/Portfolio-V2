import mongoose from "mongoose";

async function connectToDB() {
  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB: Using existing connection");
    return;
  }

  if (mongoose.connection.readyState === 2) {
    console.log("MongoDB: Connection in progress, waiting...");
    await new Promise((resolve) => {
      mongoose.connection.once("connected", resolve);
    });
    return;
  }

  try {
    console.log("MongoDB: Attempting to connect...");
    await mongoose.connect(process.env.MONGODB_URI!, {
      bufferCommands: false,
    });
    console.log("MongoDB: Connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export default connectToDB;
