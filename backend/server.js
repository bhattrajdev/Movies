import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import userRoute from "./routes/movieRoutes.js";
import movieRoute from "./routes/movieRoutes.js";
import bannerRoute from "./routes/bannerRoutes.js";


const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// for all the routes related to users
app.use("/user", userRoute);

// for all the routes related to movies
app.use("/movies", movieRoute);

// for all routes related to banner
app.use("/banner",bannerRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
