import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      // required: true,
    },
    releaseDate: {
      type: Date,
      // required: true,
    },
    genres: {
      type: Array,
      // required: true,
    },
    directors: {
      type: Array,
      // required: true,
    },
    cast: {
      type: Array,
      // required: true,
    },
    trailer: {
      type: String,
      // required: true,
    },
    poster: {
      type: String,
      // required: true,
    },
    movie: {
      type: String,
    },
    runningTime: {
      type: String,
      // required: true,
    },
    productionStudio: {
      type: String,
      // required: true,
    },
    status: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

const Movies = mongoose.model("Movies", movieSchema);

export default Movies;
