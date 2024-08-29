import mongoose from 'mongoose';

const connection : {isConnected?: number } = {};

async function connectToDB() {

  if(connection.isConnected) {
    return;
    console.log('MongoDB is already connected');
  }

  const db = await mongoose.connect(process.env.MONGODB_URI!) 

  connection.isConnected = db.connections[0].readyState;

}

export default connectToDB; 