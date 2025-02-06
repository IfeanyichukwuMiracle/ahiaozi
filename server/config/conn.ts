import mongoose from "mongoose";

const connectDB = async (url: string) => {
  return await mongoose.connect(url, { dbName: "ahiaozi" });
};

export default connectDB;
