
import express from "express";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import userRoute from './routes/userRoutes.js'

const app = express();
app.use(express.json())
dotenv.config()

connectDB()
app.use(express.json())

app.use('/',userRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT,console.log(`Server is running on port ${PORT} `))

