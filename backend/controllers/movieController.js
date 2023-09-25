import mongoose from "mongoose";
import Movies from "../models/movieModel";


const getMovies =async (res,req) =>{
const movies = await Movies.find({})
res.json(movies)
}