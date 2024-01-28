import Movies from "../models/movieModel.js";
import { deleteFile } from "../config/fileUpload.js";// to get all the movies
const getMovies = async (req, res) => {
  const movies = await Movies.find({});
  res.json(movies);
};

// to get a movie
const getMovie = async (req, res) => {
  const movie = await Movies.findById(req.params.id);
  if (movie) {
    res.status(200);
    res.json(movie);
  } else {
    res.status(404);
    throw new Error("Movie not found");
  }
};

//to delete a movie
const deleteMovie = async (req, res) => {
  try {
    console.log(req.params.id);
    const movie = await Movies.findById(req.params.id);

    console.log(movie);
    if (movie) {
      const trailerPath = `public/${movie.trailer}`;
      deleteFile(trailerPath);

      const moviePath =  `public/${movie.movie}`;
      deleteFile(moviePath);

      const posterPath = `public/${movie.poster}`;
      deleteFile(posterPath);

      await movie.deleteOne();
      res.status(200).json({ message: "Movie Removed" });
    } else {
      res.status(404).json({ error: "Movie not found" });
    }
  } catch (error) {
    console.error("Error deleting movie:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// to create a movie
const createMovie = async (req, res) => {
  try {
    console.log("req.body:", req.body);
    console.log("req.files:", req.files); // Use req.files instead of req.file

    let poster = "";
    let movie = "";
    let trailer = "";

    if (req.files) {
      // Assuming you have specific fields in req.files like "poster", "movie", and "trailer"
      poster = req.files.poster[0].filename || "";
      movie = req.files.movie[0].filename || "";
      trailer = req.files.trailer[0].filename || "";
    }

    const newMovie = await Movies.create({
      ...req.body,
      poster,
      movie,
      trailer,
    });

    console.log("newMovie:", newMovie);

    res.status(201).json(newMovie);
  } catch (error) {
    console.error("Error creating movie:", error);
    res.status(500).json({
      error: error.message,
    });
  }
};

export { getMovies, getMovie, createMovie, deleteMovie };
