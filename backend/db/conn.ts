import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    if (MONGO_URI) {
      mongoose.connect(MONGO_URI);
    } else {
      console.log("Wrong mongo URI");
    }
  } catch (e) {
    console.log(e);
  }
};

export default connectDB;
