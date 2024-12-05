import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

async function connectToDB() {
  if (connection.isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI!);

  connection.isConnected = db.connections[0].readyState;
  console.log("MongoDB connected");
}

export default connectToDB;
