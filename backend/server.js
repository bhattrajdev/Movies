import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoutes.js";
import movieRoute from "./routes/movieRoutes.js";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
connectDB();

// for all the routes related to users
app.use("/user", userRoute);

// for all the routes related to movies
app.use("/movies", movieRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
