import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(`The port is ${process.env.PORT}`);

    const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/Movies`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (conn.connection) {
      console.log(`MongoDB connected: ${conn.connection.host}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
