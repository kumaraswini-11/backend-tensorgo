import mongoose from "mongoose";
import { config } from "./config.js";

const connectDB = async () => {
  const DB_NAME = "feedbackCollectionDB";

  try {
    const connectionInstance = await mongoose.connect(
      `${config.mongoDBUri}/${DB_NAME}`
    );

    console.log(
      `\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

export default connectDB;
