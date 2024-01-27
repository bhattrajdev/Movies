import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    requred: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    requred: true,
  },
  genres: {
    type: Array,
    required: true,
  },
  directors: {
    type: Array,
    requred: true,
  },
  cast: {
    type: Array,
    required: true,
  },
  trailer: {
    type: String,
    // required: true,
  },
  poster: {
    type: String,
    requred: true,
  },
  movie: {
    type: String,
    requred: true,
  },
  runningTime: {
    type: String,
    requred: true,
  },
  productionStudio: {
    type: String,
    requred: true,
  },
  status: {
    type: String,
    required: true,
  },
});


const Movies = mongoose.model("Movies", movieSchema);

export default Movies;